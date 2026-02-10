import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CreateInsuranceComponent } from './components/create-insurance/create-insurance.component';
import { ListInsuranceComponent } from './components/list-insurance/list-insurance.component';
import { ViewInsuranceComponent } from './components/view-insurance/view-insurance.component';
import { UpdateInsuranceComponent } from './components/update-insurance/update-insurance.component';
import { DeleteInsuranceComponent } from './components/delete-insurance/delete-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateInsuranceComponent,
    ListInsuranceComponent,
    ViewInsuranceComponent,
    UpdateInsuranceComponent,
    DeleteInsuranceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
