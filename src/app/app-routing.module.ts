import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Login1Component } from './pages/login1/login1.component';
import { SigninComponent } from './pages/signin/signin.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { AddproDesComponent } from './pages/addpro-des/addpro-des.component';
import { AddproOfferComponent } from './pages/addpro-offer/addpro-offer.component';
import { AddproImageComponent } from './pages/addpro-image/addpro-image.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "login1", component: Login1Component},
  {path:"signin",component:SigninComponent},
  {path:"inventory",component:InventoryComponent},
  {path:"addproduct",component:AddproductComponent},
  {path:"addpro-des",component:AddproDesComponent},
  {path:"addpro-offer",component:AddproOfferComponent},
  {path:"addpro-image",component:AddproImageComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
