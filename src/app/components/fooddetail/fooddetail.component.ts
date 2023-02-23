import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cartService/cart.service';
// import { resolve } from 'dns';
import { FoodAPIService } from 'src/app/services/foodAPI/food-api.service';

@Component({
  selector: 'app-fooddetail',
  templateUrl: './fooddetail.component.html',
  styleUrls: ['./fooddetail.component.scss']
})
export class FooddetailComponent implements OnInit {
   public id!:any;
   public foods:any;
   public currentFood:any
   public cartMessage:boolean=false;
  //  public sub:Subscription;
  constructor(private router:ActivatedRoute,private foodapi:FoodAPIService,private cartService:CartService) {
   
   }

  async ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.id=params.get('id');
    })
     
     return await new Promise((resolve)=>{this.foodapi.getAllItems().subscribe(res=>{
      this.foods=res;
      console.log(this.foods);
      this.getItem(this.id)})
      resolve(resolve);
    });
    
     
  }
  getItem(id:string){
     this.currentFood=this.foods.filter((food:any)=>food.id===this.id)
     
  }
  addToCart(){
   this.cartService.setCartlist(this.currentFood[0]);
   this.cartMessage=true;
   setTimeout(()=>{this.cartMessage=false;},2000)
  }

  ngOnDestroy(){
    // this.sub.unsubscribe();
  }
}
