import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {
  counterVal=1;
  countLessThanOne=true;
  @Output() countEmmitter =new EventEmitter(); 

  PostValue(){
    this.countEmmitter.emit(this.counterVal);
  }
  decrement(){
    if(this.counterVal==1)
    {
      this.countLessThanOne=false;
    }
    else{
      this.countLessThanOne=true;
      this.counterVal--;
    }
    this.PostValue();
  }

  increment(){
    this.counterVal++;
    this.countLessThanOne=true;
    this.PostValue();
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
