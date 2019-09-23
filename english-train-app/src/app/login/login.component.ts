import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.value.login !== '' && form.value.password !== '') {
      this.router.navigate(['/main']);
    }
  }

}
