import { Component, OnInit } from '@angular/core';
import { FoodAPIService } from 'src/app/services/foodAPI/food-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  public burgers:any;
  constructor(private foodService:FoodAPIService) { 
    this.foodService.getAllItems().subscribe((res)=>{
      this.burgers=res;
      console.log(res)
    })
  }

  ngOnInit(): void {
  }
  
}
