import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { AuthService } from '../auth/auth.service.service';
import { NotifierService } from 'angular-notifier';

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
      state('down', style({
        'opacity': '1',
        transform: 'translateY(0)'
      })),
      state('up', style({
        'opacity': '0',
        transform: 'translateY(155px)'
      })),
      transition('up => down', animate('1.5s'))
    ])
  ]
})
export class LoginComponent implements OnInit {
  state = 'hidden';
  statePanel = 'up';
  notifier: NotifierService;

  constructor(private router: Router, private authService: AuthService, notifier: NotifierService) {
    this.notifier = notifier;
  }

  ngOnInit() {
    if (this.statePanel === 'up') {
      setTimeout(() => this.statePanel = 'down');
    }
    if (this.state === 'hidden') {
      setTimeout(() => this.state = 'shown', 1600);
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.login !== '' && form.value.password !== '') {
      this.authService.login(form.value.login, form.value.password, this.router);
    } else {
      this.authService.openSnackBar('Please fill all fields!', '');
    }
  }
}
