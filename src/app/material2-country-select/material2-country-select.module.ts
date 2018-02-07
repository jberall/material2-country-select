import { MatSelectModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material2CountrySelectComponent } from './material2-country-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule
  ],
  exports: [
    Material2CountrySelectComponent,
  ],
  declarations: [Material2CountrySelectComponent]
})
export class Material2CountrySelectModule { }
