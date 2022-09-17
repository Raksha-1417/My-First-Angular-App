import { Component, OnInit } from '@angular/core';

import * as laptops from '../data/products.json';
@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor() { }
  product:any = (laptops as any).default;

  ngOnInit(): void {
  }

  ProductDetail=true;
  //Event to perform the toggle effect
  showproductToggle()
  {
    this.ProductDetail=!this.ProductDetail;
  }

  toggleDetail(){
    var detail:any='';
    if(this.ProductDetail)
    {
      detail='fa-solid fa-arrow-up';
    }
    else{
      detail='fa-solid fa-arrow-down';
    }
    return detail;
 
  }
 
}
