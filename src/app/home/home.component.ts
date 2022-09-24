import { Component, OnInit } from '@angular/core';
import * as allprod from '../data/allproducts.json';
import * as lap from '../data/products.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  name="Raksha"
  all:any = (allprod as any).default;
  laptop:any=(lap as any).default;

  ngOnInit(): void {
  }
 

}
