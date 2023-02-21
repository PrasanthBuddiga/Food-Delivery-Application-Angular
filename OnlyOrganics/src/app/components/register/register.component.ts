import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public registerUser={email:'',password:''}
  public isLoginFailed:boolean=false;
  public errorMes:string='';
  constructor(private authserv:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
  this.authserv.registerUser(this.registerUser).subscribe(
    (res)=>{
      console.log(res)
      localStorage.setItem('token',res.token);
      this.router.navigate(['/menu']);
    },
  err=>{
    this.isLoginFailed=true;
    this.errorMes=err.error;
  })
}
}

