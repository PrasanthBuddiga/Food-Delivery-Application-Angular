import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authServ:AuthService) { }

  intercept(req:any,next:any){
    let tokenizedRequest=req.clone({
      setHeaders:{
        Authorization:`Bearer ${this.authServ.getToken()}`
      }
    })
    return next.handle(tokenizedRequest)

  }
}
