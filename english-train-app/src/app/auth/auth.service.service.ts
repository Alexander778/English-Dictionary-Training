import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  router: Router;

  constructor(public afAuth: AngularFireAuth, private _snackBar: MatSnackBar) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  register(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.openSnackBar('Please fill all fields!', '');
      })
      .catch(err => {
        this.openSnackBar('Error', '');
      });
  }

  login(email: string, password: string, router: Router) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (user) {
      router.navigate(['./main/start']);
    }).catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }
  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
