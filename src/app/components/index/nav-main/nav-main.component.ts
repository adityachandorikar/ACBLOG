import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent {

   constructor(private router:Router,private service:GlobalService){}

  
  
   add(){
   this.router.navigate(['/add'])
   }
   back(){
    this.router.navigate(['/dashboard'])
   }
   logout(){
    let option=confirm("Are You sure you want to logout")
    if(option==true){
   this.service.logout();
   this.router.navigate(['/'])
 }
 }
}
