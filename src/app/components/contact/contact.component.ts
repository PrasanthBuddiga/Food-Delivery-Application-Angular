import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public NAME:string='';
  public email:string='';
  public message:string='';

  constructor() { }

  ngOnInit(): void {
  }

  submitForm($event:any){
    $event.preventDefault();
    let  validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(this.NAME==''||this.email==""||this.message==""){
      alert("Please make sure to fill all the fields!");
    }
    else if(!this.email.match(validRegex)){
       alert("enter valid email Address")
    }
    else {
      alert(`Hello ${this.NAME}!Your message is sent now.`)
     this.NAME='';
     this.email='';
     this.message='';
    }
    
  }

}
