import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})

export class UserloginComponent {
  endPoint!: string;
  signInorsignUp: any;
  ownerName: any;

constructor(private dataservice:DataService,private router:Router){}

back(){
    if (this.signInorsignUp == 'usersignIn') {
      this.router.navigateByUrl('/userland');
}
else{
  this.router.navigateByUrl('/userland')
}
}

viewHotelList(){
  this.router.navigateByUrl('/userland/hotelDetails-user')
}
}
