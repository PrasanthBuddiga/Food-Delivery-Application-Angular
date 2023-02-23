import { Location } from '@angular/common';
import { Component,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showHeader:any;
  title = 'OnlyOrganics';
  event$: void;
  constructor(private location: Location) {
    this.event$=location.onUrlChange((val) => {
      this.showHeader=val==='/home'?false:true;
    })
  }
 
  ngOnDestroy() {
    // this.event$.unsubscribe();
  }
}
