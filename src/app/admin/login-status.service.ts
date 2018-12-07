import { Injectable } from "@angular/core";
import { Router, CanActivateChild } from "@angular/router";
import { Cookie } from "@smm/cookie";

@Injectable()
export class LoginStatusService implements CanActivateChild {
  constructor(private _route: Router) {}

  canActivateChild() {
    if (Cookie.Get("admin_login")) {
      return true;
    } else {
      this._route.navigateByUrl("/login");
      return false;
    }
  }
}
