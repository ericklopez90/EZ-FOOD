import { Ingredient } from "./ingredient.interface";

export interface Product {
  name: string;
  images: string[];
  price: number;
  description: string;
  ingredients: Ingredient[];
  category: string;
  subCategory: string;
  _id: string | number;
  linkName: string;
}
