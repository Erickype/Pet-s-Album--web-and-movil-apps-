import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { MyPetsRoutingModule } from './my-pets-routing.module';



@NgModule({
  declarations: [
    PetsPageComponent
  ],
  imports: [
    CommonModule,
    MyPetsRoutingModule
  ]
})
export class MyPetsModule { }
