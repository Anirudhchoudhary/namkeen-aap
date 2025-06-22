import { Product } from '../types';
import productJson from './product.json' assert { type: 'json' };


export const products: Product[] = productJson.map((product: Product) => ({
  id: product.id,
  name: product.name,
  price: product.price,
  image: product.image,
  quantity: product.quantity,
  variety: product.variety,
  description: product.description,
  category: product.category
}));