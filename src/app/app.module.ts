import { SetUser } from './setUser';
import { UserService } from './userService';
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
import { CategoriesPageModule } from '../pages/categories/categories.module';
import { FeedbackPageModule } from '../pages/feedback/feedback.module';
import { HelpdeskPageModule } from '../pages/helpdesk/helpdesk.module';
import { ReferPageModule } from '../pages/refer/refer.module';
import { SingleArtistPageModule } from '../pages/single-artist/single-artist.module';
import { SingleCategoryPageModule } from '../pages/single-category/single-category.module';
import { UsersPageModule } from '../pages/users/users.module';
import { UserProfilePageModule } from '../pages/user-profile/user-profile.module';
import { BookingsPageModule } from '../pages/bookings/bookings.module';

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
    }),
    CategoriesPageModule,
    BookingsPageModule,
    FeedbackPageModule,
    HelpdeskPageModule,
    ReferPageModule,
    SingleArtistPageModule,
    SingleCategoryPageModule,
    UserProfilePageModule,
    UsersPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    NotificationsPage,
    RegisterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserService,
    SetUser
  ]
})

export class AppModule {

  
}
  
