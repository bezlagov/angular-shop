import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminCartsComponent } from './admin-carts/admin-carts.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminUsersComponent,
    AdminCartsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  exports:[
    AdminComponent,
  ]
})
export class AdminModule { }
