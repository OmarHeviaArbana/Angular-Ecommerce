import { Injectable } from '@angular/core';
/* import { CanActivateFn } from '@angular/router'; */

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { AuthStoreService } from '../services/auth-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authStoreService: AuthStoreService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authStoreService.isAuth()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
}
