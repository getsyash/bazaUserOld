import { UserService } from './../../app/userService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  UserData : any;

  constructor(public userService : UserService,public navCtrl: NavController, public navParams: NavParams) {

    console.log(this.userService.user);
    this.UserData = this.userService.user;

  }

  ionViewDidLoad() {

  }

}
