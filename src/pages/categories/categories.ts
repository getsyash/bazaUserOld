import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RequestsProvider} from '../../providers/requests/requests';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  categories : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public RequestProvider: RequestsProvider) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
    this.RequestProvider.retrieveArtists().subscribe( data => {this.categories = data; console.log(data);});
  }


}
