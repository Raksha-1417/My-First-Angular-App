import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public searchTerm:string=''

  constructor(private authService:UserService,private adminService:AdminService, private cartSvc:CartService) { }
  auth:boolean=false;
  admin:boolean=false;
  cartCount:number=0;
  

  
  title = 'M-Store';
  public logo="/assets/images/undraw_android_jr64 (1).svg";
  onSearch()
  {
    alert("Will contact shortly");
  }
  productentered: string=' '  

  //Event
  search_product(product_name:string):void{ //Laptop
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; //Laptop
    console.log(product_name)
  }

  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
      //Admin Service
      this.adminService.adminSubject.subscribe(
        data => {
          console.log('admin inside nav component: ' + data);
          this.admin = data;
        }
      );
    this.cartSvc.getCartItems().subscribe(
      (response)=>
      {
        this.cartCount=response.length;
        console.log(this.cartCount);
      }
    )
    this.cartSvc.countSubject.subscribe(
      (response)=>
      {
        this.cartCount=response;
        console.log(this.cartCount);
      }
    )
  }
  
  

}
