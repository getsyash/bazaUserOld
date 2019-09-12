import { AlertController } from 'ionic-angular';
import { UserService } from './../../app/userService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as images from '../../app/imageService';
import { AngularFireAuth } from '@angular/fire/auth';
import { Profile } from '../model/profile';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoriesPage } from '../categories/categories';
/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {


  profile = {} as Profile

  BackgroundImages = images.default;

  sub
  uid
  profileData:any


  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afS : AngularFirestore,
    public alert : AlertController
    ) {

    this.uid = this.afAuth.auth.currentUser.uid
    console.log(this.uid)
    this.afS.doc(`users/${this.uid}`).valueChanges().subscribe(res =>{
      console.log(res)
      this.profileData = res
    })
  }

  ionViewDidLoad(){

  }

  updateProfile(){

    this.afS.doc(`users/${this.uid}`).set(this.profileData).then( ()=>{
      this.alert.create({subTitle : 'Profile Updated Successfully', buttons : ['Ok']}).present()
    })


  }

}
