import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('icoLState', [
      state('shown', style({
        'opacity': '1',
        transform: 'translate(0)'
      })),
      state('hidden', style({
        'opacity': '0',
        transform: 'translate(155px)'
      })),
      transition('hidden => shown', animate('1.5s'))
    ]),
    trigger('icoRState', [
      state('shown', style({
        'opacity': '1',
        transform: 'translate(0)'
      })),
      state('hidden', style({
        'opacity': '0',
        transform: 'translate(-155px)'
      })),
      transition('hidden => shown', animate('1.5s'))
    ]),
    trigger('mainPanel', [
      state('shown', style({
        'opacity': '1',
        transform: 'translateY(0)'
      })),
      state('hidden', style({
        'opacity': '0',
        transform: 'translateY(-155px)'
      })),
      transition('hidden => shown', animate('1.5s'))
    ])
  ]
})
export class LoginComponent implements OnInit {
  state = 'hidden';
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.state === 'hidden') {
      setTimeout(() => this.state = 'shown');
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.login !== '' && form.value.password !== '') {
      this.router.navigate(['/main']);
    }
  }

}
