import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authserv:AuthService,private router:Router){

  }
  canActivate(){

    if(this.authserv.isLoggedIn()){
      this.router.navigate(['/menu'])
      return false;
    }
    else {
      return true;
    }

  }
   
  
}
