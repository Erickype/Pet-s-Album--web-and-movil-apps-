import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { MyPetsRoutingModule } from './my-pets-routing.module';
import { PetCardComponent } from './components/pet-card/pet-card.component';

//material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

//fxlayoutr
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PetsPageComponent,
    PetCardComponent,
    PetsListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MyPetsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    FlexLayoutModule,
    SharedModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:[
    PetsPageComponent,
    FormComponent,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class MyPetsModule {}
