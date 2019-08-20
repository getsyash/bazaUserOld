import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the RequestsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestsProvider {

  data : any;

  baseUrl = 'https://helishores.com/baza/wp-json/wp/v2/';

  constructor(public http: HttpClient) {
    console.log('RequestsProvider - Running');
  }

  retrieveArtists(){
    return this.http.get(this.baseUrl + 'categories');
  }
retrieveImage(image){
    return this.http.get(this.baseUrl + 'media/'+image);
  }

}
