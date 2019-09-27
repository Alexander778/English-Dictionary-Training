import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
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
export class RegisterComponent implements OnInit {
  state = 'hidden';
  statePanel = 'up';
  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
    if (this.statePanel === 'up') {
      setTimeout(() => this.statePanel = 'down');
    }
    if (this.state === 'hidden') {
      setTimeout(() => this.state = 'shown', 1600);
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.login === '' || form.value.password === '' || form.value.passwordConfirm === '') {
      this.authService.openSnackBar('Please fill all fields!', '');
    } else if (form.value.password !== form.value.passwordConfirm) {
      this.authService.openSnackBar('Password not match with confirm', '');
    } else {
      this.authService.register(form.value.login, form.value.password, this.router);
    }
  }

  returnToLogin() {
    this.router.navigate(['/login']);
  }



}
