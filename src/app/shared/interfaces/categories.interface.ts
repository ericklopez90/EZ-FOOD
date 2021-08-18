import { Subcategories } from "./subcategories.interface";

export interface Categories {
    _id?: number,
    name: string,
    image: string,
    bgColor: string,
    fontColor: string,
    imageAsBackground: boolean,
    subcategories?: Subcategories[]
}