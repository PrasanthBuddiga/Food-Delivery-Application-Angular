import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isLoginFailed:boolean=false;
  public errorMes:string='';
  public loginUser={email:'',password:''};

  constructor(private authserv:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authserv.loginUser(this.loginUser).subscribe(
      (res)=>{
        console.log(res)
        localStorage.setItem('token',res.token);
        this.router.navigate(['/cart'])
      },
    err=>{
      this.isLoginFailed=true;
      this.errorMes=err.error;
    })
  }
}
