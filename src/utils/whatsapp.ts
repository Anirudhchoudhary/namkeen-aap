import { CartItem, UserDetails } from '../types';

export const generateWhatsAppMessage = (
  cartItems: CartItem[],
  userDetails: UserDetails,
  totalPrice: number
): string => {
  const orderItems = cartItems.map(item => 
    `• ${item.name} - Qty: ${item.cartQuantity} - ₹${(item.price * item.cartQuantity).toLocaleString()}`
  ).join('\n');

  const message = `
🛍️ *NEW ORDER* 

*Customer Details:*
👤 Name: ${userDetails.name}
📱 Phone: ${userDetails.phone}
📍 Address: ${userDetails.address}, ${userDetails.city} - ${userDetails.pincode}

*Order Details:*
${orderItems}

💰 *Total Amount: ₹${totalPrice.toLocaleString()}*

Thank you for your order! 🙏
  `.trim();

  return encodeURIComponent(message);
};

const sendWhatsAppOrder = async (
  cartItems: CartItem[],
  userDetails: UserDetails,
  totalPrice: number
):  Promise<any> => {
  const message = generateWhatsAppMessage(cartItems, userDetails, totalPrice);
  const response = await fetch('https://sw0bujb8ea.execute-api.us-east-1.amazonaws.com/production/add-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      orderData: {
        name: userDetails.name,
        phone: userDetails.phone,
        address: userDetails.address,
        city: userDetails.city,
        pincode: userDetails.pincode,
        message: message,
        totalPrice: totalPrice
      },
      cartItems: cartItems.map(item => ({
        name: item.name,
        cartQuantity: item.cartQuantity,
        price: item.price
      }))
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send WhatsApp order');
  } else {
    return response.json();
  }
};

export { sendWhatsAppOrder };