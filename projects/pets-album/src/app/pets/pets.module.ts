import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { PetsFormComponent } from './components/pets-form/pets-form.component';



@NgModule({
  declarations: [
    PetsPageComponent,
    PetsFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PetsModule { }
