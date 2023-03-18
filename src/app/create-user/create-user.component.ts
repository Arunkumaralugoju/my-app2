import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup=new FormGroup(
    {
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    image: new FormControl(),
  }
  );
  public isEdit:boolean=false;
  public id:string="";
  constructor(private _usersService:UsersService,private _activatedRoute:ActivatedRoute){ 
    _activatedRoute.params.subscribe(
      (data:any)=>{
        if(data.id){
          this.isEdit=true;
          this.id=data.id;
        }

       _usersService.getUser(data.id).subscribe(
        (data:any)=>{
          this.userForm.patchValue(data);
        }
       )
      }
    )
  }
  submit(){
    console.log(this.userForm);
    if(this.isEdit){
      this._usersService.updateUser(this.userForm.value,this.id).subscribe(
        (data:any)=>{
          alert("user updated successfully");
        },
        (err:any)=>{
          alert("inter server error");
        }
      )
    }
    else{
      this._usersService.createUser(this.userForm.value).subscribe(
        (data:any)=>{
          alert("user created successfully");

        },
        (err:any)=>{
          alert("internal server error");
        }
      )
    }
    
    
  }

}
