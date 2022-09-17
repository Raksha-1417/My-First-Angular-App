import { Component, OnInit } from '@angular/core';
import * as tele from "../tvsales.json";
@Component({
  selector: 'app-tvsales',
  templateUrl: './tvsales.component.html',
  styleUrls: ['./tvsales.component.css']
})
export class TvsalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  television:any=(tele as any).default;
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }
  


}
