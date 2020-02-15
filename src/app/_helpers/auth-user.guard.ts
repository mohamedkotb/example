import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../providers/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardUsers implements CanActivate {
  constructor(private auth: AuthService,private router : Router){
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const currentUser = localStorage.getItem('loginBy');
    if(route.data.role && route.data.role == currentUser){
      return true;
    }else{
      this.router.navigate(['/']);
      return false;
    }
  }
}
