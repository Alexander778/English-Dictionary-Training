import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { take, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      
    if (this.auth.authenticated) { return true; }

    return this.auth.currentUserObservable.pipe(
      take(1),
      map(user => {
        return !!user;
      }),
      tap(loggedIn => {
        console.log('loggedIn: ', loggedIn);
        if (!loggedIn) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
