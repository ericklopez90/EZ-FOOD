import { ProductInOrder } from "./product-in-order.interface";

export interface Order {
  orderId: number,
  productsInOrder: ProductInOrder[]
}
