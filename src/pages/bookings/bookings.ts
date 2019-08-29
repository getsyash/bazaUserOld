import { HelpdeskPage } from './../helpdesk/helpdesk';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as images from '../../app/imageService';
/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html',
})
export class BookingsPage {

  BackgroundImages = images.default;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }
  openHelpPage(){
    this.navCtrl.setRoot(HelpdeskPage)
  }

}
