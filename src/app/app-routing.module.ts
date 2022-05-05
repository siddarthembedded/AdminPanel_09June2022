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
import { VideoComponent } from './pages/video/video.component';
import { OrdermoComponent } from './pages/ordermo/ordermo.component';
import { OrdereportComponent } from './pages/ordereport/ordereport.component';
import { PerformanceFeedbackComponent } from './pages/performance-feedback/performance-feedback.component';
import { ReportComponent } from './pages/report/report.component';
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
import { FranchiseComponent} from './pages/franchise/franchise.component';

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
  {path:"addpro-image",component:AddproImageComponent},
  {path:"video",component:VideoComponent},
  {path:"ordermo",component:OrdermoComponent},
  {path:"ordereport",component:OrdereportComponent},
  {path:"report",component:ReportComponent},
  {path:"performance-feedback",component:PerformanceFeedbackComponent},
  {path:"com",component:ComComponent},
  {path:"salary",component:SalaryComponent},
  {path:"comdetail",component:ComdetailComponent},
  {path:"comdetailsclick",component:ComdetailsclickComponent},
  {path:"breport",component:BreportComponent},
  {path:"payemployee",component:PayemployeeComponent},
  {path:"employeeupdate",component:EmployeeupdateComponent},
  {path:"employeedel",component:EmployeedelComponent},
  {path:"addemployee",component:AddemployeeComponent},
  {path:"calendar",component:CalendarComponent},
  {path:"franchise" ,component:FranchiseComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
