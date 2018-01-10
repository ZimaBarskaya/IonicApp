import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  productList = [];
  filter = "";
  listItemName = "";
slideOneForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.productList = navParams.get('productList');
    this.filter = navParams.get('filter');
    this.slideOneForm = formBuilder.group({
        listItemName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
  }
  doneClick(){
    if(!this.slideOneForm.valid){
        $(".error").css("display", "block");
    } else {
      this.productList.push({
        type : ""+this.filter,
        name : ""+this.listItemName
      });
      this.filter = "";
      this.navCtrl.push(HomePage, {'productList' :this.productList, "filter" : this.filter });
    }
  }

  cancelClick(){
    this.navCtrl.push(EditPage, {'productList' :this.productList });
  }

}
