import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public ages:number[]=[10,20,30,2,56];
  public names:string[]=["arun","varun","kiran","tarun"];
  public states:string[]=["telangana","andhra","kerala","karnataka"];
  public users:any=[
    {name:'abe', phone:'97878994',marks:23,age:12},
    {name:'kdnnj', phone:'97xx78994',marks:40,age:23},
    {name:'aoooooo', phone:'7878994', marks:80,age:45},
  ]
  public products:any=[
    {name:'pen', price:'20', rating:2},
    {name:'shirt', price:'794',rating:4},
    {name:'tv', price:'78994',rating:4},
    {name:'phone', price:'999994',rating:4.5},
    {name:'ac', price:'100000', rating:5},

  ]
  public today:any=new Date();


}
