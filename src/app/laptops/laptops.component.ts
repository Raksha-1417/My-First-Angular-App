import { Component, OnInit,EventEmitter,Output ,Input} from '@angular/core';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
import { Cartitem } from '../cartitem';

import * as laptops from '../data/products.json';
@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  searchText: string='';

  constructor(private cartsvc:CartService) { }
  cart:Cartitem={
    pid:0,
    pname:'',
    pdescription:'',
    price:0,
    image:'',
    quantity:1,
    totalPrice:1
  }
  quantity:number=1;
  addToCart(lap:any){
    this.cart.pname=lap.pname;
    this.cart.pdescription=lap.pdescription;
    this.cart.price=lap.price;
    this.cart.image=lap.image;
    this.cart.price=lap.price;
    this.cart.totalPrice=lap.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.pid=lap.id;
    this.cartsvc.addToCart(this.cart);
    console.log(lap.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })
    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();



  }
  product:any = (laptops as any).default;
  @Input() lap:any

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

  onSearchTextEntered(searchValue : string){
    this.searchText=searchValue;
    // console.log(this.searchText);

  }
 
}
