import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModuleModule } from './header-module/header-module.module';
import { CategoriesModuleModule } from './categories-module/categories-module.module';
import { GoodsModuleModule } from './goods-module/goods-module.module';
import { FooterModuleModule } from './footer-module/footer-module.module';
import { AdminModule } from './admin/admin.module';
import { PopupsModule } from './cart/popup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModuleModule,
    FontAwesomeModule,
    CategoriesModuleModule,
    GoodsModuleModule,
    FooterModuleModule,
    HttpClientModule,
    AdminModule,
    PopupsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
