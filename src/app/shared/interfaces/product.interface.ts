import { Ingredient } from "./ingredient.interface";

export interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
  ingredients: Ingredient[];
  category?: string;
  id?: string | number;
}
