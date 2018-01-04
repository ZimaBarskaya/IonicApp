import { Component } from '@angular/core';

import { AddPage } from '../add/add';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AddPage;
  tab3Root = ContactPage;
  myFilter = '';
  animals = [
      {
        type : "cat",
        name : "Persian"
      },
      {
        type : "cat",
        name : "Siamese"
      },
      {
        type : "dog",
        name : "Labrador"
      },
      {
        type : "dog",
        name : "Mallamute"
      },
      {
        type : "bird",
        name : "Cockateel"
      },
      {
        type : "bird",
        name : "Parrot"
      },
      {
        type : "bird",
        name : "Starling"
      },

    ];
  players = [
    {
        "firstName": "Morgan",
        "lastName": "Benton",
        "username": "mbenton",
        "teamId": 1
    },
    {
        "firstName": "Kelsey",
        "lastName": "Banks",
        "username": "kbanks",
        "teamId": 1
    },
    {
        "firstName": "Jessica",
        "lastName": "Martinez",
        "username": "jmartinez",
        "teamId": 3
    },
    {
        "firstName": "Maggie",
        "lastName": "Walker",
        "username": "mwalker",
        "teamId": 2
    }
  ];

    itemSelected(item: string) {
      console.log("Selected Item", item);
    }

  constructor() {

  }
}
