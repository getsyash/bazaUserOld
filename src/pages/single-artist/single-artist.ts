import { AlertController } from 'ionic-angular';
import { UserService } from './../../app/userService';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as images from '../../app/imageService';

declare var RazorpayCheckout:any; 

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
  startDate  : Date
  endDate : Date
  location
  thisdate = new Date().toISOString();
  paymentAmount = '10000'
  currency = 'INR'
  cardDetails 
  razor_key = 'rzp_test_ZeQqQwNh2zlbRT'
  //Secrete Key = 'tqNz30fI6WADP8R9rHzm3rP7'

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams, 
     private afstore : AngularFirestore , 
     public user : UserService, 
     public alert : AlertController) {

    this.data = this.navParams.get('data');
    console.log(this.data)

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleArtistPage')
  }



  bookNow(){
    let data = {
      enddate : this.endDate.toString(),
      event : 'Marriage',
      location : this.location,
      startdate : this.startDate.toString(),
      useruid : this.user.getUID()
    }
    
  // this.afstore.collection(`Artists`).doc(`${this.data.uid}`).collection(`bookings`).add(data).then( ()=>{
  //    this.alert.create({title: 'Booking Completed',buttons: ['Ok']}).present()
  // })
  }
  payWithRazor() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency, // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: this.paymentAmount, // Payment amount in smallest denomiation e.g. cents for USD
      name: this.user.getusername(),
      prefill: {
        email: 'admin@enappd.com',
        contact: '9621323231',
        name: 'Enappd'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

}
