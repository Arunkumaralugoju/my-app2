import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { RegistrationComponent } from './registration/registration.component';
import { WishComponent } from './wish/wish.component';
import { CartComponent } from './cart/cart.component';
import { GradegggComponent } from './gradeggg/gradeggg.component';
import { CarsComponent } from './cars/cars.component';
import { PhonesComponent } from './phones/phones.component';
import { UsersComponent } from './users/users.component';
import{HttpClientModule} from '@angular/common/http';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ProductsComponent } from './products/products.component';
import { MemesComponent } from './memes/memes.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ActivityComponent } from './activity/activity.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule , } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { RatingComponent } from './rating/rating.component';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutDirectorComponent } from './about-director/about-director.component';
import { AbouHistoryComponent } from './abou-history/abou-history.component';
import { AboutModuleComponent } from './about-module/about-module.component';
import { AboutModule } from './about/about.module';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    RectangleComponent,
    DirectivesComponent,
    RegistrationComponent,
    WishComponent,
    CartComponent,
    
    GradegggComponent,
         CarsComponent,
         PhonesComponent,
         UsersComponent,
         VehiclesComponent,
         ProductsComponent,
         MemesComponent,
         AccountsComponent,
         ActivityComponent,
         CreateUserComponent,
         CreateStudentComponent,
         CreateFormComponent,
         UserDetailsComponent,
         ParentComponent,
         ChildComponent,
         ProductComponent,
         NavComponent,
         CartlistComponent,
         RatingComponent,
         AboutCeoComponent,
         AboutDirectorComponent,
         AbouHistoryComponent,
         AboutModuleComponent
         
        
      
        
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    AboutModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
