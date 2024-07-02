import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BootcomponentComponent } from './bootcomponent/bootcomponent.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { BootstrapComponent2Component } from './bootstrap-component2/bootstrap-component2.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutUsComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'product', component:BootcomponentComponent},
  {path:'cart', component:AddToCartComponent},
  {path:'employee', component:BootstrapComponent2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

