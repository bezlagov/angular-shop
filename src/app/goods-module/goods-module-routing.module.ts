import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsComponent } from './goods/goods.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"goods/product", component: ProductComponent },
  {path:"goods", component: GoodsComponent },
  {path:"goods/:category", component: GoodsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsModuleRoutingModule { }
