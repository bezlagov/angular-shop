import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class NetworkService {

    constructor(private http: HttpClient) { }

    getAllCategories() {
        return this.http.get('https://fakestoreapi.com/products/categories');
    }

    getAllProducts() {
        return this.http.get('https://fakestoreapi.com/products');
    }
    getProductsInSpecificCategory(category: string) {
        return this.http.get('https://fakestoreapi.com/products/category/' + category);
    }
    getSingleProduct(id: string) {
        return this.http.get('https://fakestoreapi.com/products/' + id);
    }

    //user cart will have id 1
    getUserCart() {
        return this.http.get('https://fakestoreapi.com/carts/1');
    }

}