export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  prescription: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}