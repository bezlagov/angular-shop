import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AdminCartsComponent } from './admin-carts/admin-carts.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:"admin",canActivate:[AuthService], component: AdminComponent, children:[
    {path:"users",canActivate:[AuthService], component: AdminUsersComponent },
    {path:"carts",canActivate:[AuthService], component: AdminCartsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
