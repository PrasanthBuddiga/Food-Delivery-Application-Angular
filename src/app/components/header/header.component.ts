import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cartService/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public qty:number=0;

  constructor(private cartServ:CartService,public authserv:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.cartServ.getCartList().subscribe(val=>{
      let totalQty=0;
      val.forEach(item=>{
        if(item.qty){
          totalQty+=item.qty;
        }
      })
      this.qty=totalQty;
    })
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/menu']);

  }
  

}
