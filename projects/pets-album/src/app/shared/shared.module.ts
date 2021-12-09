import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';

//material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

//scrollbar
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ContainerComponent } from './components/container/container.component';

//fxlayout
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { DownloadComponent } from './components/download/download.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX:true
}

@NgModule({
  declarations: [
    TableComponent,
    ContainerComponent,
    PaginatorComponent,
    KeypadComponent,
    DownloadComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatListModule
  ],
  exports:[
    TableComponent,
    MatTableModule,
    PerfectScrollbarModule,
    ContainerComponent,
    MatPaginatorModule,
    KeypadComponent,
    DownloadComponent,
    MatExpansionModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule
  ],
  providers:[
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
