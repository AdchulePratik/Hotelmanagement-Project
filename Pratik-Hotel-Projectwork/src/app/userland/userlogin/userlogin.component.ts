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

  constructor(private dataservice:DataService,private router:Router){

  }

  ngOnInit(){
    this.endPoint = this.dataservice.endPoint;
    this.signInorsignUp = this.dataservice.signinOrSignUp;
    this.ownerName = this.dataservice.ownerName;
    console.log('this.signInosignUp',this.signInorsignUp,this.ownerName,this.endPoint);

  }

  back(){
    if (this.signInorsignUp == 'usersignIn') {
      this.router.navigateByUrl('userland/usersignIn');
}
else{
  this.router.navigateByUrl('userland/usersignUp')
}
}
viewHotelList(){
  this.router.navigateByUrl('userland/hotelDetails-user')
}
}
