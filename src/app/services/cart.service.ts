import { Injectable } from "@angular/core";
import { Product } from "../model/product";

@Injectable({ providedIn: "root" })
export class CartService {

    products: Product[] = [];
    isCartOn: boolean = false;

    constructor() { }

    addProduct(product: Product) {
        let targetProduct = this.products.find((x: Product) => x.id == product.id);
        if (targetProduct) {
            targetProduct.count++;
        } else {
            this.products.push(product);
        }

    }

    removeProduct(product: Product) {
        let targetProduct = this.products.find((x: Product) => x.id == product.id);
        if (targetProduct) {
            if (targetProduct.count - 1 <= 0) {
                this.products.splice(this.products.indexOf(targetProduct), 1);
            }
            else {
                targetProduct.count--;
            }
        }
    }

    clearCart() {
        this.products = [];
    }

    calculatePrice(): number {
        let totalPrice: number = 0;

        for (let index = 0; index < this.products.length; index++) {
            const element = this.products[index];
            totalPrice += (element.price * element.count);
        }

        return totalPrice;
    }

    calculateItemsCount(): number {
        let count = 0;
        for (let index = 0; index < this.products.length; index++) {
            const element = this.products[index];
            count += element.count;
        }
        return count;
    }

    setApiItems(products: Product[]) {
        this.clearCart();
        for (let i = 0; i < products.length; i++) {
            this.addProduct(products[i]);
        }
    }
}