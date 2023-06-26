import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {

  
  constructor(private service:GlobalService,private router:Router){}
  getdata(data:any){
    //  console.log(data)
    const blogdata ={
      category: data.category,
      title:data.title,
      content:data.content
    }
  this.service.addrecords("blogs",blogdata).subscribe(() =>{
    alert("Blog Created")
    this.router.navigate(['/dashboard'])
  })
}

}
