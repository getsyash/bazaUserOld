import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as images from '../../app/imageService';
/**
 * Generated class for the HelpdeskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helpdesk',
  templateUrl: 'helpdesk.html',
})
export class HelpdeskPage {


  BackgroundImages = images.default;
  todo = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpdeskPage');
  }
  logForm(){

  }

}
