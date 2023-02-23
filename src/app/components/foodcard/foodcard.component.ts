import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ifood } from 'src/app/common/Ifood';

@Component({
  selector: 'app-foodcard',
  templateUrl: './foodcard.component.html',
  styleUrls: ['./foodcard.component.scss']
})
export class FoodcardComponent implements OnInit {
 
  @Input() food:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
 
  navigateToDetail(){
    this.router.navigate([`food/${this.food.id}`]);
    // console.log("clicked")
  }
 
}
