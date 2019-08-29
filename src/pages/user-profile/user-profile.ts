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
  UserData : any;
  sub
  uid

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afS : AngularFirestore
    ) {
      
    this.afAuth.authState.subscribe( auth=>{
      this.uid = auth.uid
    })
    console.log(this.uid)
  }

  ionViewDidLoad(){

    console.log(this.UserData)

  }

  updateProfile(){
    this.afAuth.authState.subscribe( auth=>{
      this.uid = auth.uid
    })
    console.log(this.uid)
  }

}
