import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";
import * as images from '../../app/imageService';
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})

export class NotificationsPage {
  
  BackgroundImages = images.default;
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}
