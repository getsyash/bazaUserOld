import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestsProvider } from '../../providers/requests/requests';
import 'rxjs/add/operator/map';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users:any = [];
  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public RequestProvider : RequestsProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
