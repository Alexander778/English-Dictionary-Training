import { Component, OnInit } from '@angular/core';
import { Item } from '../models/items';
import { style, transition, animate, trigger, state } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

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
        'background-color': '#e4fee8',
        'border-left': '5px solid green'
      })),
      transition('noclicked=>clicked', animate('0.3s')),
      transition('clicked=>noclicked', animate('0.3s'))
    ]),
    trigger('menuLine', [
      state('noclicked', style({
        'background-color': 'white'
      })),
      state('clicked', style({
        'font-weight': '700'
      })),
      transition('noclicked=>clicked', animate('0.3s')),
      transition('clicked=>noclicked', animate('0.3s'))
    ])
  ]
})



export class SidenavComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  login = 'testlogin'; // test
  bestResult = 23; // test
  state = 'noclicked';
  oldIndex = null;
  modules: Array<Item> = [
    {
      icon: 'list',
      name: 'Words',
      state: 'noclicked',
      routeTo: './list'
    },
    {
      icon: 'assignment_turned_in',
      name: 'Testing',
      state: 'noclicked',
      routeTo: './testing'

    },
    {
      icon: 'account_box',
      name: 'User',
      state: 'noclicked',
      routeTo: './user'
    }
  ];
  selectedIndex: number = null;

  toStartPage() {
    this.router.navigate(['./start'], { relativeTo: this.route });
    if (this.oldIndex !== null) {
      this.modules[this.oldIndex].state = 'noclicked';
    }
  }

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
    this.router.navigate([this.modules[index].routeTo], { relativeTo: this.route });
  }
  ngOnInit() {
  }

}
