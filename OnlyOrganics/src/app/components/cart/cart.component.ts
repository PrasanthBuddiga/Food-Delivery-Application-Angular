import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ifood } from 'src/app/common/Ifood';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // public sub:Subscription;
  public cartList:any;  
  public totalPrice:number=0;
  constructor(private cartService:CartService,private router:Router) { 
    
  }
  ngOnInit(): void {
    this.cartService.getCartList().subscribe((val)=>{
      
      this.cartList=val;
      let sum=0;
      for(let i=0;i<this.cartList.length;i++ ){
       sum+= this.cartList[i].price*this.cartList[i].qty;
      }
      this.totalPrice=sum;
     })
  }
  goToPayment(){
    this.router.navigate(['/payment'])
  }
  
}
