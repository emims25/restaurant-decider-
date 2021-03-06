import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';

@IonicPage()
@Component({
  selector: 'page-res-detail',
  templateUrl: 'res-detail.html',
})
export class ResDetailPage {

  name;
  address;
  category;
  url;
  price;
  userid; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: Data ) {

  }

  ionViewDidLoad() {
    this.name = this.navParams.get('item').name;
    this.address = this.navParams.get('item').address; 
    this.category = this.navParams.get('item').category;
    this.url = this.navParams.get('item').url;
    this.price = this.navParams.get('item').price;
  }

  addToFav(){
    this.dataService.addToFav(this.name, this.address, this.category, this.url, this.price);   
  }
   
  exit() {
    this.view.dismiss();
  }

}
