import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe/ngx';

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
  
  constructor(private stripe : Stripe ,public navCtrl: NavController, public navParams: NavParams) {

    this.data = this.navParams.get('data');
    console.log(this.data)

  }

  
  //

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleArtistPage')
  }
  bookNow(){
    console.log(this.bookingDates);
    //this.navCtrl.setRoot(CategoriesPage);
    this.stripe.setPublishableKey('pk_test_beSgR1i72p1j2t8Fy89BvMLo004Zwc4DpO')
    let card ={      
      number: '4242424242424242',
      expMonth: 12,
      expYear: 2020,
      cvc: '220'
    }
  this.stripe.createCardToken(card)
   .then(token => console.log(token.id))
   .catch(error => console.error(error));
  }

}
