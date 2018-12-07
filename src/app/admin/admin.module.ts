import { NgModule } from "@angular/core";
import { ShareModule } from "./../share/share.module";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";

@NgModule({
  declarations: [AdminComponent],
  imports: [ShareModule, AdminRoutingModule]
})
export class AdminModule {}
