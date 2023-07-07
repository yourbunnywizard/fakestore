import axios from 'axios';

export interface IProduct {
  id: number;
  title: string;
  price: string;
  description: string;
  image?: string;
}

export async function fetchProducts(): Promise<IProduct[]> {
  return (await axios.get('https://fakestoreapi.com/products')).data;
}
