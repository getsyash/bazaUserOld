import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as images from '../../app/imageService';
import { CategoriesPage } from '../categories/categories';

/**
 * Generated class for the SingleArtistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-artist',
  templateUrl: 'single-artist.html',
})
export class SingleArtistPage {

  
  BackgroundImages = images.default;

  data : any
  bookingDates :any = {}
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data = this.navParams.get('data');
    console.log(this.data)

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleArtistPage')
  }
  bookNow(){
    console.log(this.bookingDates);
    this.navCtrl.setRoot(CategoriesPage);
  }

}
