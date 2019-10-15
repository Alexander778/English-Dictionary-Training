import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { MatSnackBar } from '@angular/material';
import { routerNgProbeToken } from '@angular/router/src/router_module';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  router: Router;
  authState: any = null;
  currentPassword = null;

  constructor(public afAuth: AngularFireAuth, private _snackBar: MatSnackBar, public _router: Router) {
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

  get currentUserObservable(): any {
    return this.afAuth.authState;
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
    this.currentPassword = password;
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
  logout(router: Router) {
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    console.log(router);
    router.navigate(['/login']);
  }

  changePassword(newPassword: string, router: Router, afAuth: AngularFireAuth) {
    this.user.updatePassword(newPassword).then(function () {
      afAuth.auth.signOut();
      localStorage.removeItem('user');
      router.navigate(['/login']);
    }).catch(function (error) {
      this.openSnackBar(error, '');
    });
  }

  resetPassword(email: string, router: Router, afAuth: AngularFireAuth) {
    afAuth.auth.sendPasswordResetEmail(email)
      .then(function () {
        router.navigate(['/login']);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
