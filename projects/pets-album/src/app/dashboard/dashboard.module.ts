import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboarPageComponent } from './pages/dashboar-page/dashboar-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboarPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
