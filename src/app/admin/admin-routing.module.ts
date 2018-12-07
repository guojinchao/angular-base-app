import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children:[
      {
        path:"",
        redirectTo:"data",
        pathMatch:"full"
      },
      {
        path:"data",
        loadChildren:"./data/data.module#DataModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
