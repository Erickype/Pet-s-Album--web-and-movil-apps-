import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';

//material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

//scrollbar
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ContainerComponent } from './components/container/container.component';

//fxlayout
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaginatorComponent } from './components/paginator/paginator.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX:true
}

@NgModule({
  declarations: [
    TableComponent,
    ContainerComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    MatPaginatorModule
  ],
  exports:[
    TableComponent,
    MatTableModule,
    PerfectScrollbarModule,
    ContainerComponent,
    MatPaginatorModule,

  ],
  providers:[
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
