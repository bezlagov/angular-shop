import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { AuthPopupComponent } from './auth-popup/auth-popup.component';



@NgModule({
  declarations: [
    CartComponent,
    AuthPopupComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartComponent,
    AuthPopupComponent
  ],
})
export class PopupsModule { }
