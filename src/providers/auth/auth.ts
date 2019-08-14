import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RequestsProvider} from '../requests/requests';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  apiUrl = this.requestProvider.baseUrl;

  constructor(public http: HttpClient , public requestProvider : RequestsProvider) {
    console.log('Hello AuthProvider Provider');
  }

  postLogin(username, password){
    let data = {
      username: username,
      password: password
    }
    let headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    return this.http.post(this.apiUrl, data);
  }





}
