import { Product } from "./product.interface";

export interface ProductInOrder {
  customer: string,
  addedAt: Date,
  product: Product,
  status: string;
  quantity: number;
  instructions?: string;
}
