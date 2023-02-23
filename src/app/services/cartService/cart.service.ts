import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Ifood } from 'src/app/common/Ifood';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public foodList: Ifood[] = [];
  public cartState = new BehaviorSubject<Ifood[]>([ ]);
  constructor() { }
  setCartlist(food: Ifood) {
    let idToAdd = food.id;

    if(this.foodList.length===0){
      this.foodList.push({...food,qty:1})
    }
    else if(
      !(this.foodList.some((item)=>{
        if(item.id===idToAdd){
          if(item.qty){item.qty+=1;}
          return true;
        } 
        return false;
      }))
    ) {
      this.foodList.push({...food,qty:1});
    }
    this.cartState.next(this.foodList);
  }
  getCartList() {
    return this.cartState.asObservable();
  }
  updateQuant(id:string,qty:number){
    this.foodList.forEach(ele=>{
      if(ele.id===id){
          ele.qty=qty;
      }
    })
    this.cartState.next(this.foodList);
  }
  deleteItemFromCart(id:any){
    let temp=this.foodList.filter((item)=>item.id!==id);
    console.log(this.foodList);
    console.log(temp)
    this.foodList=temp;
    this.cartState.next(this.foodList);
  }
}
