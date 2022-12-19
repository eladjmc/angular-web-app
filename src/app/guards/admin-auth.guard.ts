import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Role, User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  isAdminUserLogged=false;
  constructor(private authService:AuthService){
    this.authService.loggedUser.pipe(map(v=> v?.role === Role.ADMIN)).subscribe(isAdminLogged=> this.isAdminUserLogged=isAdminLogged);

    debugger
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAdminUserLogged;
  }

}
