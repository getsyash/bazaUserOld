import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import { CategoriesPage } from "../categories/categories";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public nav: NavController) {
  }

  // register and go to home page
  register() {
    this.nav.setRoot(CategoriesPage);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
