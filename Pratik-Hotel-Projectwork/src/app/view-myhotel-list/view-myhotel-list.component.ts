import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-myhotel-list',
  templateUrl: './view-myhotel-list.component.html',
  styleUrls: ['./view-myhotel-list.component.scss']
})
export class ViewMyhotelListComponent {
  endpoint!: string;



  constructor(private dataservice: DataService,
    private router: Router
  ) { }




  back() {
    if (this.endpoint == 'admin') {
      this.router.navigateByUrl('/adminland/adminlogin');
    }
    else if (this.endpoint == 'owner') {
      this.router.navigateByUrl('/ownerland');
    }
    else {
      this.router.navigateByUrl('/ownerland');
    }
  }

}
