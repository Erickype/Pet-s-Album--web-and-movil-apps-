import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboarPageComponent } from "./pages/dashboar-page/dashboar-page.component";

const routes: Routes = [
    {path: "", component: DashboarPageComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class DashboardRoutingModule{}