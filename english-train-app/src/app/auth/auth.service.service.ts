import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { MatSnackBar } from '@angular/material';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  router: Router;
  authState: any = null;

  constructor(public afAuth: AngularFireAuth, private _snackBar: MatSnackBar) {
    this.afAuth.authState.subscribe(user => {
      this.authState = user;
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  register(email: string, password: string, router: Router) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.openSnackBar('Registering was success. Please login to system with your email and password!', '');
        router.navigate(['/login']);
      })
      .catch(err => {
        this.openSnackBar(err.message, '');
      });

  }

  login(email: string, password: string, router: Router) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (user) {
      router.navigate(['./main/start']);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        this.openSnackBar('Wrong password. Please try again!', '');
      } else {
        this.openSnackBar(errorMessage, '');
      }
      this.openSnackBar(errorMessage, '');
    });
  }
  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
