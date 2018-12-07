import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataComponent } from "./data.component";

const routes: Routes = [
  {
    path: "",
    component: DataComponent,
    children: [
      { path: "", redirectTo: "vote" },
      {
        path: "vote",
        loadChildren: "./vote/vote.module#VoteModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule {}
