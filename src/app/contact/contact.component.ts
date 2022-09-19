import { Component, OnInit } from '@angular/core';
import { Contactdetails } from '../contactdetails';
import { ContactdetailsService } from '../contactdetails.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:Contactdetails[]=[];

  constructor(private contactservice:ContactdetailsService) { }

  ngOnInit(): void {
    const contactObservable=this.contactservice.getContactFormDetails();
    contactObservable.subscribe((contactData:Contactdetails[])=>{
      this.contact=contactData;
    });
  }
  onClick(){
    alert("You Have Submitted Form")
  }

}
