import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { NetworkService } from 'src/app/services/network.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private netService: NetworkService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(res => {
      let category = res['category'];
      if (category === undefined) {
        this.netService.getAllProducts().subscribe(res => {
          this.products = <Product[]>res;
        });
      } else {
        this.netService.getProductsInSpecificCategory(category).subscribe(res => {
          this.products = <Product[]>res;
        });
      }
    })

  }
  setAsc() {
    this.products = this.products.sort(function(a, b) {
      var textA = a.title.toUpperCase();
      var textB = b.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  }

  setDesc() {
    this.products = this.products.sort(function(a, b) {
      var textA = a.title.toUpperCase();
      var textB = b.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }).reverse();

  }
}
