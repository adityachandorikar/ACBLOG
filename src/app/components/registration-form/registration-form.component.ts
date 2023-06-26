import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent  implements OnInit{

  constructor(private fb:FormBuilder,private router:Router,private service:GlobalService){}
  userdata:any
  getdata(data:any){
    console.log(data)
    const robj={
      fname:data.fname,
      lname:data.lname,
      emailid:data.emailid,
      contact:data.contact,
      username:data.username,
      password:data.password,
      gender:data.gender,
      dob:data.dob
    }
    const lobj={
      id:data.id,
      username:data.username,
      password:data.password
    }
    this.service.addrecords("registration",robj).subscribe(() =>{
     alert("Registration Successfull");
     
     this.router.navigate(['/login'])
    })
    this.service.addrecords("login",lobj).subscribe(() =>{
      console.log(" login Record added");
    })
  }
  ngOnInit(): void {

    this.userdata=this.fb.group({
      fname:['',[Validators.required,Validators.pattern("[a-zA-Z]{3,30}")]],
      lname:['',[Validators.required,Validators.pattern("[a-zA-Z]{3,30}")]],
      emailid:['',[Validators.required,Validators.email]],
      contact:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      username:['',[Validators.required,Validators.pattern("[a-zA-z0-9]{5,20}")]],
      password:['',[Validators.required,Validators.pattern("[a-zA-Z@$&*#0-9]{8,20}")]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]]
    })
   
  }
  
  signup(){
    this.router.navigate(['/login'])
  }

}


