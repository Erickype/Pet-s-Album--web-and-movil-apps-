import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPetPageComponent } from './pages/add-pet-page/add-pet-page.component';
import { AddPetRoutingModule } from './add-pet-routing.module';
import { AddPetFormComponent } from './components/add-pet-form/add-pet-form.component';

//flex
import { FlexLayoutModule } from '@angular/flex-layout';

//material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AddPetPageComponent,
    AddPetFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    AddPetRoutingModule,
    MatIconModule,
    SharedModule
  ],
  exports:[
    AddPetPageComponent
  ]
})
export class AddPetModule { }
