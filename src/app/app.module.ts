import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import {HeaderComponent} from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, ROUTES } from '@angular/router';
//import appRoutes from './app.router';
import { LoginComponent } from './pages/login/login.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserAnomationsModule}
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule } from '@angular/flex-layout';  
import {Login1Component } from './pages/login1/login1.component';
import {SigninComponent } from './pages/signin/signin.component';
import {InventoryComponent } from './pages/inventory/inventory.component';
 import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarheaderComponent} from './components/navbarheader/navbarheader.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { AddproDesComponent } from './pages/addpro-des/addpro-des.component';

import { AddproOfferComponent } from './pages/addpro-offer/addpro-offer.component';
import { AddproImageComponent } from './pages/addpro-image/addpro-image.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Login1Component,
    SigninComponent,
    InventoryComponent,
    HeaderComponent,
    SidebarComponent,
    //NavbarheaderComponent,
    AddproductComponent,
    AddproDesComponent,
    AddproOfferComponent,
    AddproImageComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    MatSliderModule,MatSidenavModule, FormsModule,ReactiveFormsModule,MatNativeDateModule,HttpClientModule,
    MatToolbarModule, MatIconModule, FlexLayoutModule,AppRoutingModule,RouterModule, 
   ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent]
})
export class AppModule { }
