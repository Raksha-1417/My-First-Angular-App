import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//accessing ngModel for 2-way binding
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TvComponent } from './tv/tv.component';
import { TvsalesComponent } from './tv/tvsales/tvsales.component';
import { AdvertismentComponent } from './advertisment/advertisment.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardsComponent,
    SearchComponent,
    ContactComponent,
    AboutComponent,
    LaptopsComponent,
    TvComponent,
    TvsalesComponent,
    AdvertismentComponent,
    AllproductsComponent,
    FooterComponent,
    CounterComponent,
    CounterchildComponent,
    RegisterComponent,
    LoginComponent,
    ProductdetailsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }