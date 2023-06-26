import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  
  constructor(private router:ActivatedRoute,private service:GlobalService,private router1:Router){}
 id:any
 way:any
 udata:any
 ngOnInit(): void {
     this.router.paramMap.subscribe((para) =>{
      this.id=para.get('id')
      this.way=para.keys
      this.service.getrecord("blogs",this.id).subscribe((res)=>{
        this.udata={...res}
        console.log(this.id);
        console.log(res);
        console.log(this.way);
      })
     })
 }
  edit(bdata:any){
    const obj ={
      id:this.id,
      category:bdata.category,
      title:bdata.title,
      content:bdata.content
    }
    console.log(obj);
    this.service.updaterecords("blogs",obj).subscribe(() =>{
     alert("Blog Updated Successfully")
     this.router1.navigate(['/dashboard'])
    })
  }
  
}
