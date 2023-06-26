 import { Component ,OnInit } from '@angular/core';
 import { Router } from '@angular/router';
 import { GlobalService } from 'src/app/shared/services/global.service';

 @Component({
   selector: 'app-signup-form',
   templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
 })
 export class SignupFormComponent implements OnInit{
//   userdata:any
//   username:any
//   password:any
//   constructor(private service:GlobalService,private router:Router){}
// ngOnInit(): void {

// }
// login(){
//   console.log(this.username + this.password);
//   this.service.getrecords("login").subscribe((res) =>{
//     this.userdata=res;
//     const data = this.userdata.filter((item:any) => {return item.username == this.username && item.password == this.password })
//     if(data.length >0){
//       this.service.login(this.username)
//       this.router.navigate(['/dashboard'])
//     }else{
//       alert("Invalid Credentials")
//       this.username=""
//       this.password=""
//     }
//   })
// }
 

//   getdata(data:any){
//     console.log(data);
//   }

// }

constructor(private service: GlobalService,private router:Router) { }
username: any
password: any
userdata: any
ngOnInit(): void {
  //  this.service.getrecords("users").subscribe((res) =>{
  //   console.log(res)
  //  })
}
login() {
  console.log(this.username + this.password)
  this.service.getrecords("login").subscribe((res) => {
    this.userdata = res

  const data = this.userdata.filter((item:any) => { return item.username == this.username && item.password == this.password}) 
  if(data.length >0){
    this.service.login(this.username)
    this.router.navigate(['/dashboard'])
  }else{
    alert("Invalid Credentials")
    this.username ="";
    this.password ="";
  }

  
  })
}
 }