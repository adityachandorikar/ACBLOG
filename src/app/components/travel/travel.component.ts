import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit{
  carddata: any
  constructor(private service:GlobalService, private router:Router) { }
  ngOnInit(): void {
    this.service.getrecords("travel").subscribe((dat) => {
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
