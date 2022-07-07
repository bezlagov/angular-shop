import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesModuleRoutingModule } from './categories-module-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesModuleRoutingModule,
    FontAwesomeModule
  ],
  exports:[
    CategoriesComponent
  ],
})
export class CategoriesModuleModule { }
