import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {

  public cat: string;
  public topic: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cat = this.navParams.get('cat');
    this.topic = this.navParams.get('topic');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }

}
