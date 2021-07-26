import { Subcategories } from "./subcategories.interface";

export interface Categories {
    id?: number,
    name: string,
    image: string,
    bgColor: string,
    subcategories?: Subcategories[]
}