import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import {CardsComponent } from './cards/cards.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {LaptopsComponent } from './laptops/laptops.component';
import { TvComponent } from './tv/tv.component';


//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'laptops',component:LaptopsComponent},
  {path:'tv', component:TvComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }