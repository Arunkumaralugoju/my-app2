import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public products:any=[];
  constructor(private _productsService:ProductsService){
    _productsService.getProducts().subscribe(
      (data:any)=>{
        this.products=data;
      },
      (err:any)=>{
        alert("internal server error");
      }

    )
  }

}
