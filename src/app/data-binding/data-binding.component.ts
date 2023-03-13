import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  age=20;
  public phone:number=9581682153;
  public name:string="a";
  public isindian:boolean=true;
  submit(){
    alert("sueccess clicked");
  }
  test(){
    alert("double clicked");
    
  }
  enter(){
    alert("mouse enterted");
  }
  leave(){
    alert("mouse leaved");
  }
  key(){
    alert("key pressed");
  }
  public mobile:number=91;

}
