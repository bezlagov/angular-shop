import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { NetworkService } from 'src/app/services/network.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = new Product;

  private id: string = '';
  constructor(private netService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
      this.id = res['id'];

      this.netService.getSingleProduct(this.id).subscribe(res => {
        this.product = <Product>res;
      });
    });
  }
  onBuyClick(product: Product) {
    product.count = 1;
    this.cartService.addProduct(product);
  }
}
