import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private loginUrl="http://localhost:3000/api/login";
  private registerUrl='http://localhost:3000/api/register'
  constructor(private http:HttpClient) { }

  loginUser(user:any){
    return this.http.post<any>(this.loginUrl,user)
  }
  registerUser(user:any){
    return this.http.post<any>(this.registerUrl,user)
  }
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
}

