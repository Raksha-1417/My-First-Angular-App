import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvsales',
  templateUrl: './tvsales.component.html',
  styleUrls: ['./tvsales.component.css']
})
export class TvsalesComponent implements OnInit {

  constructor() { }
   @Input() tel:any
  ngOnInit(): void {
  }
 
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
