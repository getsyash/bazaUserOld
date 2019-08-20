import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import { CategoriesPage } from "../categories/categories";
import { AuthProvider } from "../../providers/auth/auth";
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email ; 
  password ;

  constructor(private sms : SMS ,public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, private AuthProvider: AuthProvider) {
    this.menu.swipeEnable(false);
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    console.log(this.randomFixedInteger());
    this.sms.send('919494174938',this.randomFixedInteger()).then(()=>{this.nav.setRoot(CategoriesPage)}).catch((err)=>{JSON.stringify(err)});
  }

  randomFixedInteger = function (length = 3) {
    return 'BZA'+ Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
  }


}
