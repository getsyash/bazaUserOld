import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RequestsProvider} from '../../providers/requests/requests';
import { HttpClient } from '@angular/common/http';

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

  users:any = [];
  UserImages:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public RequestProvider: RequestsProvider, public http: HttpClient) {


  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
    this.RequestProvider.retrieveArtists().subscribe( data =>{
      console.log(data);
      this.users = data;
    });
    this.http.get('../assets/categories.json').subscribe(
      data => {
        console.log(data);
        this.UserImages = data;
      }
    );

  }

}
