import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { ResDetailPage } from '../res-detail/res-detail';
import { SettingsPage} from "../settings/settings";

@Component({
  selector: 'page-rest-list',
  templateUrl: 'rest-list.html'
})
export class RestListPage {
  items = [];
  filteredItems = [];

  constructor(public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.items = this.dataService.getRestList();
    this.filteredItems = this.dataService.getRestList();
  }

  ionViewDidLoad() {

  }

  categoryFilter(categoryfilter){
    this.filteredItems.length = 0;
    for (var i = this.items.length - 1; i >= 0; i--) {
      if(categoryfilter == this.items[i].category){
        this.filteredItems.push(this.items[i]);
      }
    }
  }

  clearFilters(){
    this.filteredItems = this.dataService.getRestList();
  }

  viewItem(item) {
    this.navCtrl.push(ResDetailPage, {
      item: item
    });
  }

  getSettings(){
    this.navCtrl.setRoot(SettingsPage);
  }
}
