import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../../commons/material.module';
import { RoutingModule } from './routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeadOfficeComponent } from './head-office/head-office.component';
import { ProductsComponent } from './products/products.component';
import { LoanDistributionComponent } from './loan-distribution/loan-distribution.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { SuccessMsgComponent } from './success-msg/success-msg.component';



@NgModule({
  declarations: [
    FormComponent,
    HeadOfficeComponent,
    ProductsComponent,
    LoanDistributionComponent,
    GeneralInfoComponent,
    SuccessMsgComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class FormsModule { }
