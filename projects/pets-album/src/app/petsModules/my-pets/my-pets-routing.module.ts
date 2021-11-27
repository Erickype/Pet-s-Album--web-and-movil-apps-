import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PetsPageComponent } from "./pages/pets-page/pets-page.component";

const routes: Routes = [
    {path: "", component: PetsPageComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class MyPetsRoutingModule{}