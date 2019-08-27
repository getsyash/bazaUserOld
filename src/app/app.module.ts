import { UserProfilePage } from './../pages/user-profile/user-profile';
import { UserService } from './userService';
import { SingleCategoryPage } from './../pages/single-category/single-category';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';


import firebaseConfig from './firebase'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import { RequestsProvider } from '../providers/requests/requests';
import { CategoriesPage } from '../pages/categories/categories';
import { UsersPage } from '../pages/users/users';
import { SplashPage } from '../pages/splash/splash';
import { AuthService } from './auth.service';
import { SingleArtistPage } from '../pages/single-artist/single-artist';

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    NotificationsPage,
    RegisterPage,
    CategoriesPage,
    UsersPage,
    SplashPage,
    SingleCategoryPage,
    UserProfilePage,
    SingleArtistPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: 'Baza',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    NotificationsPage,
    RegisterPage,
    CategoriesPage,
    UsersPage,
    SplashPage,
    SingleCategoryPage,
    UserProfilePage,
    SingleArtistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RequestsProvider,
    UserService,
    AuthService
  ]
})

export class AppModule {

  
}
  
