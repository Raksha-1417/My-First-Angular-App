import { Component, OnInit } from '@angular/core';
import * as laps from '../data/products.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  name="Raksha"
  product:any = (laps as any).default;

  ngOnInit(): void {
  }

}
