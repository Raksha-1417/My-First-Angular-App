import { Component, OnInit } from '@angular/core';
import * as allprod from '../data/allproducts.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  name="Raksha"
  all:any = (allprod as any).default;

  ngOnInit(): void {
  }

}
