import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent  implements OnInit{
  carddata: any
  constructor(private service:GlobalService, private router:Router) { }
  ngOnInit(): void {
    this.service.getrecords("science").subscribe((dat) => {
      console.log(dat)
      this.carddata = dat;
    })

  }
  delete(udata: string, id: any) {
    this.service.deleterecords(udata, id).subscribe(() => {
      alert("Record Deleted Successfully")
      return this.router.navigate(['/dashboard'])
    })
  }
}
