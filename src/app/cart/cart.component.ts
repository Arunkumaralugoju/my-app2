import { TmplAstBoundAttribute } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public products:any=[
    {name:'pen', price:10,rating:'3.5',isFreeDelivery:false},
    {name:'phone', price:88880,rating:'3.1',isFreeDelivery:true},
    {name:'toy', price:50,rating:'4.5',isFreeDelivery:false},
    {name:'bag', price:1800,rating:'2.5',isFreeDelivery:true},
    {name:'tv', price:650000,rating:'2.0',isFreeDelivery:false},
    {name:'ac', price:148220,rating:'4.2',isFreeDelivery:false},
    {name:'machine', price:286520,rating:'5.0',isFreeDelivery:true},
    {name:'table', price:15000,rating:'3.7',isFreeDelivery:true},
    {name:'glass', price:40,rating:'4.6',isFreeDelivery:true},
    {name:'clock', price:800,rating:'4.0',isFreeDelivery:false},
    {name:'shirt', price:8880,rating:'3.5',isFreeDelivery:false},
    {name:'pant', price:2058,rating:'3.1',isFreeDelivery:true},
    {name:'bike', price:166660,rating:'4.2',isFreeDelivery:false},
    {name:'car', price:45222110,rating:'5.0',isFreeDelivery:true},


  ];
  public term:string="";
  search(){
    this.products=this.products.filter((product:any)=>product.name.indexOf(this.term) !=-1);
  }
  public product:any={};
  create(){

    this.products.unshift(this.product)
  }
  delete(i:number){
    this.products.splice(i,1);
  }
  count(){
    alert("cart count is "+this.products.length);
  }
  onlyfree(){
    this.products=this.products.filter((product:any)=>product.isFreeDelivery==true);
  }
  pricelh(){
    this.products=this.products.sort((a:any,b:any)=>a.price-b.price);
  }
  pricehl(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  pricellh(){
    this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }
  pricehhl(){
    this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }

  total(){
    alert(this.products.reduce((sum:any,product:any)=>sum+product.price,0));
    
  }
  discount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price/2
      return product;
    })
    
  }
  charges(){
    this.products=this.products.map((product:any)=>{
     if(product.isFreeDelivery==false){
      product.price=product.price/2
     }
      return product;
    })


}
}
