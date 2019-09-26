import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, group, animate } from '@angular/animations';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        query(':enter, :leave', style({ position: 'absolute', 'width': '100%' }), { optional: true }),
        group([
          query(':enter', [
            style({
              transform: 'translateX(-100%)'
            }),
            animate('1.5s ease-in-out',
              style({
                transform: 'translateX(0)',
                'opacity': '1'
              }))
          ], { optional: true }),
          query(':leave', [
            style({
              transform: 'translateX(0)'
            }),
            animate('1.5s ease-in-out',
              style({
                transform: 'translateX(-100%)',
                'opacity': '0'
              }))
          ], { optional: true }),
        ])
      ])
})

export class MainpageComponent {
  constructor() { }

}
