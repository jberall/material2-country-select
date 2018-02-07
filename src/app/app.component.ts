import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { getCountryName } from './material2-country-select/material2-country-select.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  countryName: string;
  form: FormGroup;
  getCountryName = getCountryName
  
  constructor(private fb: FormBuilder){
    this.form = fb.group({
      title: [],
      country: []
    });
  }
  
  getName($event){
    // console.log($event)
    this.countryName = getCountryName($event)
  }
}
