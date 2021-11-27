import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPetPageComponent } from './pages/add-pet-page/add-pet-page.component';
import { AddPetRoutingModule } from './add-pet-routing.module';



@NgModule({
  declarations: [
    AddPetPageComponent
  ],
  imports: [
    CommonModule,
    AddPetRoutingModule
  ]
})
export class AddPetModule { }
