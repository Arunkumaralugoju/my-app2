import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateStudentComponent } from '../create-student/create-student.component';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  public createForm: FormGroup = new FormGroup({
    username : new FormControl("",[Validators.required,Validators.min(3),]),
    password : new FormControl("",[Validators.required, Validators.min(0),Validators.max(100)]),
   
  })
  public createStudent1: FormGroup = new FormGroup({
    name: new FormControl(),
    class: new  FormControl(),
    fatherName : new FormControl(),
    email: new FormControl(),
    dateOfBirth : new FormControl(),
    address : new FormControl({
    city : new FormControl(),
    state : new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)]),
    pincode : new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)]),

  }),

  // dynamic array
  type: new FormControl(),
  busFee: new FormControl(),
  hostalFee: new FormControl(),

  ////////////form array
  marks : new FormArray([])
})
get marksFormArray(){
  return this.createStudent1.get('marks') as FormArray;

}
add (){
   this.marksFormArray.push(
    new FormGroup(
      {
        class : new FormControl("",[Validators.required,Validators.min(1),Validators.max(25)]),
        year : new FormControl(),
        percentage : new FormControl("",[Validators.required,Validators.min(0),Validators.max(99)]),
      }
    )
   )
}
delete(i:number){
  this.marksFormArray.removeAt(i);
}

  creat() {
    console.log(this.createForm);
  }
  submit() {
    console.log(this.createForm);
  }
  

}
