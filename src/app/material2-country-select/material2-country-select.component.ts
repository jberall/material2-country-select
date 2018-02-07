
/**
 * Forms the basis for the class
 * 
 * the html is also shared.
 * 
 * {@link https://stackoverflow.com/questions/40009149/creating-custom-form-controls-in-angular-2}
 * 
 *  {@link http://plnkr.co/edit/69SGnjYGBWhC4tEezc1G?p=preview}
 */
import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { countriesEn } from './langs/en';
import { countriesFr } from './langs/fr';

@Component({
  selector: 'material2-country-select',
  templateUrl: './material2-country-select.component.html',
  styleUrls: ['./material2-country-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Material2CountrySelectComponent),
      multi: true,
    }
  ],
})
export class Material2CountrySelectComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string = 'Country';
  @Input() startCountries: Array<any> = [];
  @Input() limitCountries: Array<any> = [];
  @Input() lang: string = 'en';
  @Input() noValue: boolean = true; 
  @Input() initNoValue: string = 'Select Country';
  private _selectValue: any = '';
  private _onTouchedCallback: () => {};
  private _onChangeCallback: (_: any) => {};
  _inputValue;
  hasValue;
  countries:Array<any>;
 

  constructor() { }

  ngOnInit() {
    this.getCountries();
  }


  getCountries() {
    let isoCountry = getCountryList(this.lang);
    let arr = [];
    
    if (this.noValue) arr.push({code: '', country: this.initNoValue});
    
    //init county
    this.startCountries.forEach((code,index) => arr.push({ code, country: isoCountry[code] }));
    
    Object.keys(isoCountry).forEach((key) => {
      // console.log(key,isoCountry[key]);
      
      if (this.limitCountries.length) {
        if (this.limitCountries.indexOf(key) !== -1) {
          arr.push({ code: key, country: isoCountry[key] });
        }
      } else {
        arr.push({ code: key, country: isoCountry[key] })
      } 

    });
    this.countries = arr;
  }
  
  get selectValue(): any {
    return this._selectValue;
  }
  set selectValue(value: any) {
    if (value !== this._selectValue) {
      this._inputValue = value;
      this._selectValue = value;
      this._onChangeCallback(value);
    }

    this.hasValue = (value != null && value.length > 0)

    this._onTouchedCallback();

  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    this._selectValue = value;
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }
}

/**
 * Only English (en) and French (fr) are supported.
 * 
 * @param lang Optional 2 letter string defaults to 'en'
 * @returns Country List Array
 */
export function getCountryList(lang: string = 'en'):Object {
  let isoCountry: Object;
  let arr: Array<any> = [];
  switch(lang.toLocaleLowerCase()) {
    case 'fr':
      return countriesFr.countries;
    default:
      return countriesEn.countries;
  }
}

/**
 * Only English (en) and French (fr) are supported.
 * 
 * @param countryCode 2 letter string
 * @param lang Optional 2 letter string defaults to 'en'
 * @returns Country Name
 */
export function getCountryName(countryCode:string = '', lang: string = 'en'):string {
  return (countryCode) ? getCountryList(lang)[countryCode] : '';
}