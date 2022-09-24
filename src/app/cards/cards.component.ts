import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  searchText: string='';
  constructor() { }
  ProductDetails = [
    {
      "pid": "1",
      "image":"/assets/images/oneplus10.png",
      "pname": "OnePlus 10T 5G",
       "price":"Rs 49,999",
      "pdescription":"50MP Main Camera with Sony IMX766 and OIS, 8MP Ultrawide Camera 120 degree FOV, 2MP",
      "status": "Instock"
      
    },
    {
      "pid": "2",
      "image":"/assets/images/oneplusnordce.png",
      "pname": "OnePlus Nord CE 2 Lite 5G",
      "price":"Rs 19,999",
      "pdescription":"Features 6.7″ display, Snapdragon 8+ Gen 1 chipset, 4800 mAh battery",
      "status": "Instock"
     
    },
    {
      "pid": "3",
      "image":"/assets/images/oneplus10pro.png",
      "pname": "OnePlus 10Pro 5G",
      "price":"Rs 73,999",
      "pdescription":"48MP Main Camera with Sony IMX 789 Lens (OIS enabled), 50MP Ultra-wide angle camera & 8MP",
      "status": "Outstock"
     
    },
    {
      "pid": "4",
      "image":"/assets/images/samsungultra.jpg",
      "pname": "Samsung S22 Ultra",
      "price":"Rs 1,19,999",
      "pdescription":"The first Galaxy S with embedded S Pen, 5G Phone",
      "status": "Instock"
     
    },
    {
      "pid": "5",
      "image":"/assets/images/galaxyfold.png",
      "pname": "Samsung Z Fold 4",
      "price":"Rs 1,54,999",
      "pdescription":"Features 6.7″ display, Snapdragon 8+ Gen 1 chipset, 4800 mAh battery",
      "status": "Outstock"
     
    },
  
    {
      "pid": "6",
      "image":"/assets/images/galaxyz.jpg",
      "pname": "Samsung Z Flip 4",
      "price":"Rs 89,999",
      "pdescription":"Style and function that fits in your pocket, 3700mAh (typical) battery.",
      "status": "Instock"
     
    },
    {
      "pid": "7",
      "image":"/assets/images/iphone12.jpg",
      "pname": "iPhone 12",
      "price":"Rs 69,999",
      "pdescription":"6.1-inch (15.5 cm diagonal) Super Retina XDR display Ceramic Shield",
      "status": "Outstock"
     
    },
    {
      "pid": "8",
      "image":"/assets/images/vivox50.jpg",
      "pname": "Samsung Z Flip 4",
      "price":"Rs 44,990",
      "pdescription":"Memory, Storage & SIM: 8GB RAM | 256GB internal memory | Dual SIM.",
      "status": "Instock"
     
    },
    {
      "pid": "9",
      "image":"/assets/images/oppo.jpg",
      "pname": "Vivo V21",
      "price":"Rs 38,990",
      "pdescription":"Super AMOLED Display 64MP + 8MP + 2MP + 2MP, 32MP Front Camera",
      "status": "Outstock"
     
    },
  ]

  ngOnInit(): void {
  }
  onSearchTextEntered(searchValue : string){
    this.searchText=searchValue;
    // console.log(this.searchText);

  }
  onBuy(){
    Swal.fire('Oops', 'This Product is out of Stock', 'error');
  }

}
