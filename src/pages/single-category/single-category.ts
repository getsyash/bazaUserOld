import { SingleArtistPage } from './../single-artist/single-artist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';

import * as images from '../../app/imageService';
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
  
  BackgroundImages
  category : any
  Userdata : any
  SearchBar : any
  searchArtist
  loadedUserData 
  constructor(public afs: AngularFirestore, public navCtrl: NavController, public navParams: NavParams) {
    let data = this.afs.collection('Artists')
    data.valueChanges().subscribe(
      event =>{
        this.Userdata = event
        this.loadedUserData = event
        console.log(this.Userdata)
      }
    )
     this.BackgroundImages = images.default;
     console.log(this.BackgroundImages.logo)
  }

  ionViewDidLoad() {
    this.category  = this.navParams.get('id');
    console.log(this.category);
  }
  openUser(t){
    this.navCtrl.push(SingleArtistPage,{data : t})
  }

  setAtrist(e){    
    this.Userdata = this.loadedUserData
    console.log(e.value)
    const searchTerm = e.value;
    if (!searchTerm) {
      return;
    }
    this.Userdata = this.loadedUserData.filter(currentGoal => {
      if (currentGoal.username && searchTerm) {
        if (currentGoal.username.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          console.log(currentGoal.username)
          return true;
        }
        return false;
      }
    });
    
  }

  filter(){
    console.log('Filter')
    return this.loadedUserData.filter(item => {
      return item.username.toLowerCase().indexOf() > -1;
    })
  }
}
