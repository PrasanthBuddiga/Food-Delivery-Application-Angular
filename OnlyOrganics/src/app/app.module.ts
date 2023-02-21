import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { FoodcardComponent } from './components/foodcard/foodcard.component';
import { FoodAPIService } from './services/foodAPI/food-api.service';
import {HttpClient,HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
// import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooddetailComponent } from './components/fooddetail/fooddetail.component';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AuthService } from './services/auth/auth.service';
import { PaymentComponent } from './components/payment/payment.component';
import { AuthGuard } from './auth.guard';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginGuard } from './services/login.guard';
import { RegisterComponent } from './components/register/register.component';

// import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    LoginComponent,
    FoodcardComponent,
    FooddetailComponent,
    CartItemComponent,
    PaymentComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule

  ],
  providers: [FoodAPIService,HttpClient,AuthService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
  },LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
