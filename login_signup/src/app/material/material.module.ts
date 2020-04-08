import { NgModule } from '@angular/core';
import {
  MatButtonModule , 
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule, 
  MatList, 
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


 
const MaterialComponents = [
  MatButtonModule, 
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
]

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
