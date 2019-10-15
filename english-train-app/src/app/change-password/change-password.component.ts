import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }
  isChecked = false;
  typeInput = 'password';
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.value.oldPassword === '' || form.value.newPassword === '' || form.value.passwordConfirm === '') {
      this.authService.openSnackBar('Please fill all fields!', '');
    } else if (form.value.newPassword !== form.value.passwordConfirm) {
      this.authService.openSnackBar('Password not match with confirm', '');
    } else if (form.value.oldPassword === form.value.newPassword && form.value.newPassword !== this.authService.currentPassword) {
      this.authService.openSnackBar('Old password is equal to new password.Please change password', '');
    } else {
      this.authService.changePassword(form.value.newPassword, this.router, this.authService.afAuth);
    }
  }

  onChange(event: Event) {
    this.isChecked = event.checked;
    this.typeInput = this.isChecked === true ? 'text' : 'password';
    /*this.isChecked = this.isChecked === true ? false : true;
    console.log(this.isChecked);*/
  }

}
