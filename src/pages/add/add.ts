import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  productList = [];
  filter = "";
  listItemName = "Name";
  constructor(public navCtrl: NavController, public navParams: NavParams) {//, public productList: any[], public filter: "", public listItemName: ""
    this.productList = navParams.get('productList');
    this.filter = navParams.get('filter');
  }
  doneClick(){
    this.productList.push({
      type : ""+this.filter,
      name : ""+this.listItemName
    });
    this.filter = "";
    this.navCtrl.push(HomePage, {'productList' :this.productList, "filter" : this.filter });
  }

  cancelClick(){
    this.navCtrl.push(EditPage, {'productList' :this.productList });
  }

}
