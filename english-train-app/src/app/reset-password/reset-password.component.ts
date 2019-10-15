import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  animations: [
    trigger('icoLState', [
      state('shown', style({
        'opacity': '1',
        transform: 'translate(0)',

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
export class ResetPasswordComponent implements OnInit {

  constructor(public router: Router, public authService: AuthService, public afAuth: AngularFireAuth) { }
  state = 'hidden';
  statePanel = 'up';

  ngOnInit() {
    if (this.statePanel === 'up') {
      setTimeout(() => this.statePanel = 'down');
    }
    if (this.state === 'hidden') {
      setTimeout(() => this.state = 'shown', 1600);
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.email !== '') {
      this.authService.resetPassword(form.value.email, this.router, this.authService.afAuth);
    } else {
      this.authService.openSnackBar('Please fill all fields!', '');
    }
  }

  returnToLogin() {
    this.router.navigate(['/login']);
  }

}
