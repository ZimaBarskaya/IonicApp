import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  productList = [];
  filter = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productList = navParams.get('productList');
    this.filter = navParams.get('filter');
  }

  addClick(){
    this.navCtrl.push(AddPage, {'productList' :this.productList, "filter" : this.filter });
  }
  doneClick(){
    this.navCtrl.push(HomePage, {'productList' :this.productList});
  }
  ionViewDidLoad() {
  }

}
