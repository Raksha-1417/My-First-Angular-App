import { Component, OnInit } from '@angular/core';
import * as tele from "./tvsales.json";
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  television:any=(tele as any).default;

}
