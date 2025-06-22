export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variety: string;
  description: string;
  category: string;
}

export interface CartItem extends Product {
  cartQuantity: number;
}

export interface UserDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}