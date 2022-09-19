import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactdetails } from './contactdetails';
@Injectable({
  providedIn: 'root'
})
export class ContactdetailsService {

  constructor() { }
  contact: Contactdetails[]=[
    {
      id:1,
      name:'Raksha',
      department:'Products Head',
      email:'raksha@gmail.com',
      mobile:8977665433,
      description: 'We look into your queries related to Products',
      image:'/assets/images/icon1.jpg'

},
{
  id:2,
  name:'Anchan',
  department:'Sales Team',
  email:'anchan@gmail.com',
      mobile:7874665433,
  description: 'We Solve Your Query regarding Orders.',
  image:'/assets/images/icon2.png'
},
{
  id:3,
  name:'Anika',
  department:'Customer Care',
  email:'anika@gmail.com',
      mobile:9088665433,
  description: ' Please Contact us any queries regarding purchasing.',
  image:'/assets/images/icon3.webp'
},
{
  id:4,
  name:'Rajath',
  department:'Service Team',
  email:'rajath@gmail.com',
      mobile:8965432178,
  description: ' We Solve Your Query regarding Orders.',
  image:'/assets/images/icon4.jpg'
}
];
public getContactFormDetails(): any {
  const contactObservable = new Observable(observe => {
    setTimeout(() => {
      observe.next(this.contact);
    }, 1000);
  });
  return contactObservable;
}
}

