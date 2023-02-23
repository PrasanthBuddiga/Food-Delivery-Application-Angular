import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartService/cart.service';
import { FoodAPIService } from 'src/app/services/foodAPI/food-api.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() food:any;
  public quant:any;
  constructor(private cartServ:CartService) { }

  ngOnInit(): void {
  }
  inputChange(event:any){
    this.cartServ.updateQuant(this.food.id,parseInt(event.target.value))
  }
  
   isNumber (evt:any) {
    evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
      evt.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  deleteFromCart(){
    this.cartServ.deleteItemFromCart(this.food.id)
  }
}
