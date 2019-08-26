import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ArtistPage } from '../artist/artist';

/**
 * Generated class for the SingleCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-category',
  templateUrl: 'single-category.html',
})

export class SingleCategoryPage {
  category : any
  Userdata : any
  SearchBar : any
  constructor(public afs: AngularFirestore, public navCtrl: NavController, public navParams: NavParams) {
    let data = this.afs.collection('Artists')
    data.valueChanges().subscribe(
      event =>{
        this.Userdata = event
        console.log(this.Userdata)
      }
    )
  }

  ionViewDidLoad() {
    this.category  = this.navParams.get('id');
    console.log(this.category);
  }
  openUser(t){
    console.log('Open User clicked');
    console.log(t);
    this.navCtrl.push(ArtistPage,{data : t})
  }
}
