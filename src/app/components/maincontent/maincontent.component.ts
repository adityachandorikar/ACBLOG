import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'smart-array-filter';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit  {
  carddata: any
  constructor(private service:GlobalService, private router:Router) { }
  ngOnInit(): void {
    this.service.getrecords("blogs").subscribe((dat) => {
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


