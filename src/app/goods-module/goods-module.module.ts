import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsModuleRoutingModule } from './goods-module-routing.module';
import { GoodsComponent } from './goods/goods.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    GoodsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    GoodsModuleRoutingModule
  ],
  exports:[GoodsComponent],
})
export class GoodsModuleModule { }
