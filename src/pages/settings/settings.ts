import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HelpPage } from '../help/help';
import { FavPage } from '../fav/fav';
import { AlertController } from 'ionic-angular';
import { SigninPage } from '../signin/signin'

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  getHelp(){
    this.navCtrl.setRoot(HelpPage);
  }

  close() {
    this.navCtrl.setRoot(FavPage);
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Are you sure you want to sign out?',
      buttons: [{text: 'Yes', handler: () => {
          this.app.getRootNav().setRoot(SigninPage); ;
        }}, {text:'No'}]
    });
    alert.present();
  }
}


