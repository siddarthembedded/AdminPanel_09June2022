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
import { VideoComponent } from './pages/video/video.component';
import { OrdermoComponent } from './pages/ordermo/ordermo.component';
import { OrdereportComponent } from './pages/ordereport/ordereport.component';
import { ReportComponent } from './pages/report/report.component';
import { PerformanceFeedbackComponent } from './pages/performance-feedback/performance-feedback.component';
import { ComComponent } from './pages/com/com.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { ComdetailComponent } from './pages/comdetail/comdetail.component';
import { ComdetailsclickComponent } from './pages/comdetailsclick/comdetailsclick.component';
import { BreportComponent } from './pages/breport/breport.component';
import { PayemployeeComponent } from './pages/payemployee/payemployee.component';
import { EmployeeupdateComponent } from './pages/employeeupdate/employeeupdate.component';
import { EmployeedelComponent } from './pages/employeedel/employeedel.component';
import { AddemployeeComponent } from './pages/addemployee/addemployee.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { DisFranchiseComponent } from './pages/dis-franchise/dis-franchise.component';
import { FranchiselistComponent } from './pages/franchiselist/franchiselist.component';
import { FranchiseditComponent } from './pages/franchisedit/franchisedit.component';
import { ReferComponent } from './pages/refer/refer.component';


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
    AddproImageComponent,
    VideoComponent,
    OrdermoComponent,
    OrdereportComponent,
    ReportComponent,
    PerformanceFeedbackComponent,
    ComComponent,
    SalaryComponent,
    ComdetailComponent,
    ComdetailsclickComponent,
    BreportComponent,
    PayemployeeComponent,
    EmployeeupdateComponent,
    EmployeedelComponent,
    AddemployeeComponent,
    CalendarComponent,
    FranchiseComponent,
    DisFranchiseComponent,
    FranchiselistComponent,
    FranchiseditComponent,
    ReferComponent,
    
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
  // bootstrap: [AppComponent,HomeComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
