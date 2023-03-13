import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  public number1:number=0;
  public number2:number=0;
  public perimeter:number=0;

  sum(){
    this.perimeter=this.number1*this.number2;
  }
  mul(){
    this.perimeter=(2*(this.number1+this.number2));
  }

}
