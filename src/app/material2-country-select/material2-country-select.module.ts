import { FunctionsService } from './services/functions.service';
import { MatSelectModule } from '@angular/material';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material2CountrySelectComponent } from './material2-country-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    Material2CountrySelectComponent,
  ],
  declarations: [Material2CountrySelectComponent]
})
export class Material2CountrySelectModule { 
  

    /**
     * Use in AppModule: new instance of SumService.
     */
    public static forRoot(): ModuleWithProviders {
      return {
          ngModule: Material2CountrySelectModule,
          providers: [FunctionsService]
      };
  }

  /**
   * Use in features modules with lazy loading: new instance of SumService.
   */
  public static forChild(): ModuleWithProviders {
      return {
          ngModule: Material2CountrySelectModule,
          providers: [FunctionsService]
      };
  }  
}
