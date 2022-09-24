import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Cartitem } from 'src/app/cartitem';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tvsales',
  templateUrl: './tvsales.component.html',
  styleUrls: ['./tvsales.component.css']
})
export class TvsalesComponent implements OnInit {

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
  addToCart(tel:any){
    this.cart.pname=tel.pname;
    this.cart.pdescription=tel.pdescription;
    this.cart.price=tel.price;
    this.cart.image=tel.image;
    this.cart.price=tel.price;
    this.cart.totalPrice=tel.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.pid=tel.id;
    this.cartsvc.addToCart(this.cart);
    console.log(tel.id);
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
