import { Component, enableProdMode  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditPage } from '../edit/edit';


enableProdMode();
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  productList = [];
  filter = "";
  myFilter = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(navParams.get('productList')) {
      this.productList = navParams.get('productList');
    } else {
      this.productList = [
          {
            type : "cart",
            name : "Milk 1l"
          },
          {
            type : "cart",
            name : "Eggs Medium 12 pack"
          },
          {
            type : "cart",
            name : "Fresh Basil"
          },
          {
            type : "cart",
            name : "Wholegrain Bread 1 pkg"
          },
          {
            type : "cart",
            name : "Ground Coffe 200g"
          },
          {
            type : "cart",
            name : "Red Wine"
          },
          {
            type : "",
            name : "White Wine"
          },
          {
            type : "",
            name : "Ground Coffe 50g"
          },
          {
            type : "",
            name : "Lemon Juice"
          },
          {
            type : "cart",
            name : "Mozzarella Cheese 150g"
          },
          {
            type : "cart",
            name : "Orange Juice 1l"
          },
          {
            type : "",
            name : "Cucmbers 350g"
          },
          {
            type : "cart",
            name : "Tomatoes"
          },

        ];
    }
    if(navParams.get('filter') !== undefined) {
      this.myFilter = navParams.get('filter');
    }
  }

 

    nextPage(){
      if(this.myFilter.type !== undefined) {
        this.navCtrl.push(EditPage, {'productList' : this.productList, "filter" : this.myFilter} );
      } else {
        this.navCtrl.push(EditPage, {'productList' : this.productList, "filter" : this.myFilter.type} );
        console.log(this.myFilter.type);
      }
    }
    cartFilter(item){
          item.type = "cart";
          this.myFilter = 'cart';
          this.navCtrl.push(HomePage, {'productList' : this.productList} );
      }

      allFilter(item){
            if(item.type !=  '') {
            item.type = "";
            this.navCtrl.push(HomePage, {'productList' : this.productList, "filter" : {type: 'cart'}  } );
          } else {
              item.type = "";
            this.navCtrl.push(HomePage, {'productList' : this.productList} );
          }
        }
}
