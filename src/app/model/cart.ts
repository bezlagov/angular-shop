import { CartProduct } from "./cart-product";
import { Product } from "./product";

export class Cart {
    id: number = 0;
    userId: number = 1;
    date: String = '';
    products: CartProduct[] = [];
}