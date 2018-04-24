import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Parse } from 'parse';
import { Data } from '../../providers/data';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  registerPage = SignupPage;
  password: string = '';
  username: string = '';

  constructor(public navCtrl: NavController, data:Data) { 

  }

  ionViewDidLoad() {

  }

  public doSignin() {
    var self=this;
    Parse.User.logIn(this.username, this.password, {
    success: function(user) {
      console.log("logged in "+user.get("username"));
      self.navCtrl.setRoot(TabsPage);
    },
    error: function(user, error) {
    }
  });

  }

}
