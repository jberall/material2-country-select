import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Material2CountrySelectComponent } from './material2-country-select.component';

describe('Material2CountrySelectComponent', () => {
  let component: Material2CountrySelectComponent;
  let fixture: ComponentFixture<Material2CountrySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Material2CountrySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Material2CountrySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
