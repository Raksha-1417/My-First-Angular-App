import { Component, OnInit } from '@angular/core';
import { Cartitem } from '../cartitem';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';
@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {

  constructor(private cartSvc:CartService,private router :Router) { }
  carts:Cartitem={
    pid:0,
    pname:'',
    pdescription:'',
    price:0,
    image:'',
    quantity:1,
    totalPrice:1
  }
  cartData:any=[];
  totalprice:number=0;
  quantity=1;
  totalPrice(data:any){
    debugger
    const initialValue=0;
    this.cartData=data
    const a =this.cartData.reduce((sum:any,item:any)=>sum+(item.price * item.quantity),initialValue);
    return a;
  }
  cart:Cartitem[]=[];
  delete(deleteItem : Cartitem){
    this.cartSvc.removeItemFromCart(deleteItem).subscribe(
      ()=>console.log(deleteItem.pname)
    );
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'error',
      title: 'Item deleted successfully'
    })
    this.ngOnInit();
  }
  onClick(){
    this.router.navigate(['tv'])
  }
  

  ngOnInit(): void {
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart);
      }
    )
  }

}

