import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import * as tele from "./tvsales.json";
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  searchText: string='';
  
  constructor() { }

  ngOnInit(): void {
 

  }
  television:any=(tele as any).default;
  
  onSearchTextEntered(searchValue : string){
    this.searchText=searchValue;
    // console.log(this.searchText);

  }

}
