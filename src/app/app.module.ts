import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { CustomDirDirective } from './directives/custom-dir.directive';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BootcomponentComponent } from './bootcomponent/bootcomponent.component';
import { FormsModule } from '@angular/forms';
import { BootstrapComponent2Component } from './bootstrap-component2/bootstrap-component2.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingsComponent } from './event-bindings/event-bindings.component';
import { EventBindingCalculatorComponent } from './event-binding-calculator/event-binding-calculator.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { PreStructDirsComponent } from './pre-struct-dirs/pre-struct-dirs.component';
import { PreAttrDirsComponent } from './pre-attr-dirs/pre-attr-dirs.component';
import { BootExampleComponent } from './boot-example/boot-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponentComponent,
    CustomDirectivesComponent,
    CustomDirDirective,
    EventBindingComponent,
    EmployeeDetailsComponent,
    BootcomponentComponent,
    BootstrapComponent2Component,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    AddToCartComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingsComponent,
    EventBindingCalculatorComponent,
    TwoWayBindingComponent,
    StyleBindingComponent,
    PreStructDirsComponent,
    PreAttrDirsComponent,
    BootExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
