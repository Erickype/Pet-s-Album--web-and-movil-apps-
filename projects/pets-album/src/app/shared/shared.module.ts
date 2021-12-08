import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';

//material
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports:[
    TableComponent,
    MatTableModule
  ]
})
export class SharedModule { }
