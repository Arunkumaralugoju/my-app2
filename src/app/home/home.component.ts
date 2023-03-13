import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public number1:number=0;
  public number2:number=0;
  public size:number=0;

  mul(){
    this.size=this.number1*this.number2
  }


}
