import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerland',
  templateUrl: './ownerland.component.html',
  styleUrls: ['./ownerland.component.scss']
})
export class OwnerlandComponent {

  constructor(private dataservice: DataService,private router: Router){}

  viewAllHotelList(){
   this.router.navigateByUrl('/hotelDetails');

  }







  }

