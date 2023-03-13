import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public creatStudent: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    age: new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)]),
    email: new FormControl("",[Validators.required,Validators.email]),

  })


  // Nested form

  public form1: FormGroup = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
    city: new FormControl(),
    address: new FormGroup({
      state: new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)]),
      pin: new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),

    // dynamic form


    type: new FormControl(),
    busFee: new FormControl(),
    hostalFee: new FormControl(),

    // Form Array
    
    cards: new FormArray([])

  })
  get cardsFormArray(){
    return this.form1.get('cards') as FormArray;
  }
  add (){
    this.cardsFormArray.push(
      new FormGroup(
        {
          number:new FormControl("",[Validators.required,Validators.min(100000000000),Validators.max(999999999999)]),
          expairy:new FormControl(),
          cvv: new FormControl("",[Validators.required,Validators.min(100),Validators.max(999)])
        }
      )
    )
  }
  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }
  constructor() { }
  creat() {
    console.log(this.creatStudent);
  }
  submit() {
    console.log(this.form1);
  }


}


