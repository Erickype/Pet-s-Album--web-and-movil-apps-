import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddPetPageComponent } from "./pages/add-pet-page/add-pet-page.component";

const routes: Routes = [
    {path: "", component: AddPetPageComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class AddPetRoutingModule{}