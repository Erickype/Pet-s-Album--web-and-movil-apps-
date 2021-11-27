import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboarPageComponent } from './pages/dashboar-page/dashboar-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboarPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
