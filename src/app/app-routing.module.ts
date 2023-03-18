import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { GradegggComponent } from './gradeggg/gradeggg.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MemesComponent } from './memes/memes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PhonesComponent } from './phones/phones.component';
import { ProductsComponent } from './products/products.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { WishComponent } from './wish/wish.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ParentComponent } from './parent/parent.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { NotifyGuard } from './notify.guard';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'wish',component:WishComponent},
    {path:'cart',component:CartComponent},
    {path:'gradeggg',component:GradegggComponent},
    {path:'cars',component:CarsComponent},
    {path:'phones',component:PhonesComponent},
    {path:'users',component:UsersComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'products',component:ProductsComponent},
    {path:'memes',component:MemesComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'activity',component:AccountsComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'create-user/:id',component:CreateUserComponent},
    {path:'create-student',component:CreateStudentComponent,canDeactivate:[NotifyGuard]},
    {path :'create-form',component:CreateFormComponent},
    {path:'user-details/:id',component:UserDetailsComponent},
    {path:'parent',component:ParentComponent},
    {path:'product',component:ProductComponent},
    {path:'nav',component:NavComponent},
    {path:'cartlist',component:CartlistComponent},
    {path:'about-ceo',component:AboutCeoComponent}
    

    
  ]},
  
  {path:'',component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
