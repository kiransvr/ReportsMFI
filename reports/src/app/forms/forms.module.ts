import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../../commons/material.module';
import { RoutingModule } from './routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormComponent
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
