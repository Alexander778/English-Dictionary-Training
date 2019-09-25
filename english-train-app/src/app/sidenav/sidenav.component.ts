import { Component, OnInit } from '@angular/core';
import { Item } from '../models/items';
import { FormBuilder } from '@angular/forms';
import { style, transition, animate, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('menuItem', [
      state('noclicked', style({
        'background-color': 'white'
      })),
      state('clicked', style({
        'background-image': 'linear-gradient(to right, #e4fee8 , #22c1c3)'
      })),
      transition('noclicked=>clicked', animate('0.3s')),
      transition('clicked=>noclicked', animate('0.3s'))
    ])
  ]
})



export class SidenavComponent implements OnInit {
  login = 'testlogin'; // test
  bestResult = 23; // test
  state = 'noclicked';
  oldIndex = null;
  modules: Array<Item> = [
    {
      icon: 'list',
      name: 'Words',
      state: 'noclicked'
    },
    {
      icon: 'assignment_turned_in',
      name: 'Testing',
      state: 'noclicked'

    },
    {
      icon: 'account_box',
      name: 'User',
      state: 'noclicked'

    },
  ];
  selectedIndex: number = null;

  clickOnItem(index: number) {
    this.selectedIndex = index;
    this.modules[index].state = 'clicked';
  }
  setIndex(index: number) {
    if (this.oldIndex === null) {
      this.clickOnItem(index);
      this.oldIndex = index;
    }

    if (index !== this.oldIndex) {
      this.clickOnItem(index);
      this.modules[this.oldIndex].state = 'noclicked';
    }
    this.oldIndex = index;
  }
  constructor() { }

  ngOnInit() {
  }

}
