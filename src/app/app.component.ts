import { FunctionsService } from './material2-country-select/services/functions.service';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  countryName: string;
  lang = 'fr';
  form: FormGroup;

  
  constructor(private fb: FormBuilder,private functionService: FunctionsService){
    this.form = fb.group({
      title: [],
      country: []
    });
  }
  
  getCountryName($event){
    return this.functionService.getName($event,this.lang);
  }
}
