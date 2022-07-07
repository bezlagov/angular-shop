import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  menuItems: String[] = [];
  constructor(
    private netService: NetworkService,
    private cart: CartService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.netService.getAllCategories().subscribe(res => {
      this.menuItems = <string[]>res;
    });
  }

  onOpenCart() {
    this.cart.isCartOn = true;
  }
  onOpenAuth() {
    this.auth.isAuthOn = true;
  }
}
