import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SingleCategoryPage } from '../single-category/single-category';
import { AngularFirestore } from '@angular/fire/firestore';
import * as images from '../../app/imageService';
import { SingleArtistPage } from '../single-artist/single-artist';
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



  CategoryData =[]
  loadedCategoryData = []
  mainuser : any
  sub
  backgroundImages = images.default
  searchCategory
  Userdata;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: HttpClient,
    private afs : AngularFirestore,
    ) {
      let DumpData = afs.collection(`categories`);
      this.sub = DumpData.valueChanges().subscribe(event => {
        this.CategoryData = event
        this.loadedCategoryData = event
        console.log(this.CategoryData)
      })
      let data = this.afs.collection('Artists')
      data.valueChanges().subscribe(
        event =>{
          this.Userdata = event
          console.log(this.Userdata)
        }
      )
  }
  initializeItems(): void {
    this.CategoryData = this.loadedCategoryData;
  }

  
  ionViewDidLoad(){
  }


  openCategory(post){    
    this.navCtrl.setRoot(SingleCategoryPage,{id:post});
  }
  openUser(e){
    this.navCtrl.push(SingleArtistPage,{data : e})
  }
  setCategories(e){
    this.CategoryData = this.loadedCategoryData
    console.log(e.value)
    const searchTerm = e.value;
    if (!searchTerm) {
      return;
    }
    this.CategoryData = this.CategoryData.filter(currentGoal => {
      if (currentGoal.name && searchTerm) {
        if (currentGoal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          console.log(currentGoal.name)
          return true;
        }
        return false;
      }
    });
  }

}
