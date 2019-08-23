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
            console.log(data.confirmationCode);
            let signinCredential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId,data.confirmationCode);
            firebase.auth().signInWithCredential(signinCredential).then((info)=>{
              console.log(info);
              this.nav.setRoot(CategoriesPage);
              },(err)=>{
                console.log(err)
              }
            )
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
