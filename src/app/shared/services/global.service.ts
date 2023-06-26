import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
   
  baseURL:string='http://localhost:3000'
  constructor(private http:HttpClient) { }
  
  //GET single record
  getrecord(uname:any,id:any){
    const url=`${this.baseURL}/${uname}/${id}`
    console.log(url);
   return this.http.get(url)

  }

  //READ 
  getrecords(uname:string){
    const url= `${this.baseURL}/${uname}`
   return this.http.get(url)
  }
//CREATE or ADD
  addrecords(uname:string,bdata:any){
    const url= `${this.baseURL}/${uname}`
    return this.http.post(url,bdata)
  }
  //UPDATE or EDIT
  updaterecords(uname:string,bdata:any){
       const url=`${this.baseURL}/${uname}/${bdata.id}`
       return this.http.put(url,bdata)
  }
  //Delete records
  deleterecords(uname:string,id:any){
    const url=`${this.baseURL}/${uname}/${id}`
    return this.http.delete(url)
  }
 //store data in session storage
 login(user:any){
  sessionStorage.setItem("userkey",user)
}
//clear username from the session storage
logout(){
  sessionStorage.removeItem("userkey")
}	

}
