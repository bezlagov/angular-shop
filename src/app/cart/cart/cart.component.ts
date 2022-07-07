import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = new Cart();
  products: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService,
    private network: NetworkService) { }

  ngOnInit(): void {
    this.network.getUserCart().subscribe(res => {
      this.cart = <Cart>res;
      this.products = [];
      for (let i = 0; i < this.cart.products.length; i++) {
        this.network.getSingleProduct(this.cart.products[i].productId.toString()).subscribe(pr => {
          let prod: Product = <Product>pr;
          prod.count = this.cart.products[i].quantity;
          this.products.push(prod);
          this.cartService.addProduct(prod);
        })
      }

      this.getTotalPrice();
    });
  }


  onClickPlus(id: number) {
    let item: Product = this.products.find((x: Product) => x.id == id);
    this.cartService.addProduct(item);
    this.products = this.cartService.products;
    this.getTotalPrice();

  }

  onClickMinus(id: number) {
    let item: Product = this.products.find((x: Product) => x.id == id);
    this.cartService.removeProduct(item);
    this.products = this.cartService.products;
    this.getTotalPrice();
  }


  onBuy() {
    this.onClose();
  }

  onClose() {
    this.cartService.isCartOn = false;
  }

  getStatus(): boolean {
    return this.cartService.isCartOn;
  }

  getTotalPrice() {
    this.totalPrice = this.cartService.calculatePrice();
  }
}
