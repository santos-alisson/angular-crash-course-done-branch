import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSampleComponent } from './form-sample.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormSampleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormSampleComponent
  ]
})
export class FormSampleModule { }
