import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModuleRoutingModule } from './header-module-routing.module';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';


@NgModule({
  declarations: [
    HeaderMenuComponent,
    HeaderBannerComponent
  ],
  imports: [
    CommonModule,
    HeaderModuleRoutingModule
  ],
  exports:[
    HeaderMenuComponent,
    HeaderBannerComponent
  ]
})
export class HeaderModuleModule { }
