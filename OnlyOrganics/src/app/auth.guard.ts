import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServ:AuthService,private router:Router){

  }
  canActivate(){
   if(this.authServ.isLoggedIn()){
    return true;
   }
   else {
    this.router.navigate(['/login']);
    return false
   }
  }
  
}
