import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  carddata: any
  constructor(private service:GlobalService, private router:Router) { }
  ngOnInit(): void {
    this.service.getrecords("technology").subscribe((dat) => {
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
