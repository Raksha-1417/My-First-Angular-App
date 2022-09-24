import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //property - _productname
  _productname:any | undefined;

  //To pass information between components we have @Input and @Output

  @Input('product') 
  //write
  set pname(pname:any) 
  {
    this._productname=pname || 'not found';
    console.log(pname)
  }
  //read
  get pname():string
  {
    return this._productname;
  }
  enterValue :string='';
  @Output()
  searchTextChanged :EventEmitter<string>=new EventEmitter<string>();

  onsearchTextChanged(){
    this.searchTextChanged.emit(this.enterValue);
    
  }
}