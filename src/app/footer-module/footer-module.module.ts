import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterModuleRoutingModule } from './footer-module-routing.module';
import { FooterLinksComponent } from './footer-links/footer-links.component';

@NgModule({
  declarations: [
    FooterLinksComponent,
  ],
  imports: [
    CommonModule,
    FooterModuleRoutingModule
  ],
  exports:[
    FooterLinksComponent,
  ],
})
export class FooterModuleModule { }
