import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import {CardsComponent } from './cards/cards.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {LaptopsComponent } from './laptops/laptops.component';
import { TvComponent } from './tv/tv.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { TvsalesComponent } from './tv/tvsales/tvsales.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './checkout/checkout.component';



//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'laptops',component:LaptopsComponent},
  {path:'tv', component:TvComponent},
  {path:'tvsles',component:TvsalesComponent},
  {path:'allproducts', component:AllproductsComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'productdetails', component:ProductdetailsComponent},
  {path:'cartitem',component:CartitemsComponent},
  {path:'search', component:SearchComponent},
  {path:'checkout', component:CheckoutComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }