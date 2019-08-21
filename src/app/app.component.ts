import { Component, ViewChild } from "@angular/core";
import { Platform, Nav, ModalController } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { LoginPage } from "../pages/login/login";
import { CategoriesPage } from "../pages/categories/categories";
import { UsersPage } from "../pages/users/users";
import { SplashPage } from "../pages/splash/splash"
import { NotificationsPage } from "../pages/notifications/notifications";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public modalCtrl : ModalController
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Categories', component: CategoriesPage, icon: ''},
      {title: 'Artists', component: UsersPage, icon: ''},
      {title: 'Notifications', component: NotificationsPage, icon: ''},
      
    ];

    platform.ready().then(() => {

      statusBar.styleDefault();

      let splash = modalCtrl.create(SplashPage);
      splash.present();

  });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
       this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      //this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
