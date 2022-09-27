import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Productmodel } from '../productmodel';
import { ProductapiService } from '../productapi.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  searchText: string='';
  formValue!:FormGroup;
  productModelobj:Productmodel=new Productmodel();
  productData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;


  constructor(private formbuilder:FormBuilder, private api:ProductapiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      pname:[''],
      pdescription:[''],
      price:[''],
      img:['']
    })
    this.getProducts();
  }
  clickAddProduct(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;

  }
  postProductDetails(){
    this.productModelobj.pname = this.formValue.value.pname;
    this.productModelobj.pdescription = this.formValue.value.pdescription;
    this.productModelobj.price = this.formValue.value.price;
    this.productModelobj.img = this.formValue.value.img;

    this.api.postProducts(this.productModelobj).subscribe(res=>{
      console.log(res);
      Swal.fire('Product Added', 'Your product added succesfully!', 'success');
     
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    },
    err=>{
      alert("Something went wrong. Please check again!")
    })
  }
  
  getProducts(){
    this.api.getProductDetails().subscribe(res=>{
      this.productData = res;
    }, err=>{
      
    })
  }
  deleteProducts(product: any){
    this.api.deleteProducts(product.id).subscribe(res=>{
      Swal.fire('Product Deleted', 'Your product Delete succesfully!', 'error');
     
      this.getProducts();
    }), 
    ({

    })
  }

  onEdit(product: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.productModelobj.id = product.id;
    this.formValue.controls['pname'].setValue(product.pname);
    this.formValue.controls['pdescription'].setValue(product.pdescription);
    this.formValue.controls['price'].setValue(product.price);
    this.formValue.controls['img'].setValue(product.img);
  }

  updateProductDetails(){
    this.productModelobj.pname = this.formValue.value.pname;
    this.productModelobj.pdescription = this.formValue.value.pdescription;
    this.productModelobj.price = this.formValue.value.price;
    this.productModelobj.img = this.formValue.value.img;
    this.api.updateProducts(this.productModelobj, this.productModelobj.id).subscribe(res=>{
      Swal.fire('Product Updated', 'Your product updated succesfully!', 'success');

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    })
  }

  
  onSearchTextEntered(searchValue : string){
    this.searchText=searchValue;
    // console.log(this.searchText);

  }
}
