import { CategoriesPage } from './../categories/categories';
import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {RegisterPage} from "../register/register";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  phoneNumber : any = '';
  company = {
    form:null
  }; 
  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;
  constructor(public alertCtrl:AlertController ,public afAuth: AngularFireAuth,public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
    this.company.form = "male";
  }
  ionViewDidLoad(){
  this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
    'size': 'invisible',
    'callback':function(response){
      console.log(response);
    }
  });
}
  

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  /* Login with email
  async login() {
    //this.nav.setRoot(CategoriesPage);
    const { username , password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username,password);
      console.log(res);
      if (res){
        this.nav.setRoot(CategoriesPage);
      }
    }catch (err){
      console.dir(err);
			if(err.code === "auth/user-not-found") {
				console.log("User not found")
			}

    }
  }
  */
  
  async login(phonenumber : number){    
    // Login with phonenumber
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+91" + phonenumber;
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    .then(confirmationResult => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      let prompt = this.alertCtrl.create({
      title: 'Enter the Confirmation code',
      inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
      buttons: [
        { text: 'Cancel',
          handler: data => { console.log('Cancel clicked'); }
        },
        { text: 'Send',
          handler: data => {
            confirmationResult.confirm(data.confirmationCode)
            .then(function (result) {
              // User signed in successfully.
              console.log(result.user);
              this.nav.setRoot(CategoriesPage);
              // ...
            }).catch(function (error) {
              // User couldn't sign in (bad verification code?)
              // ...
            });
          }
        }
      ]
    });
    prompt.present();
  })
    .catch(function (error) {
      console.error("SMS not sent", error);
    });

  }
}
