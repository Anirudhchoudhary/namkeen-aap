export interface Varieties {
  quantity: number;
  price: number;
}
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variety: Varieties[];
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