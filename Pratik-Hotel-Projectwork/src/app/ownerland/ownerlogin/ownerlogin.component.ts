import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownerlogin',
  templateUrl: './ownerlogin.component.html',
  styleUrls: ['./ownerlogin.component.scss']
})
export class OwnerloginComponent {
  endPoint: any;
  signInOrSignUp: any;
  ownerName: any;
  hotelDetails: any;
  hotelDetailsByOwner: any = [];
 constructor(  private dataservice: DataService,
  private router :Router){}

  ngOnInit(){

  this.endPoint = this.dataservice.endPoint;
  this.signInOrSignUp =  this.dataservice.signinOrSignUp;
  this.ownerName = this.dataservice.ownerName;
  console.log(this.ownerName,'this.ownerName');

  console.log('this.signInOrSignUp --',this.signInOrSignUp );

  }
  back(){
    if(this.signInOrSignUp =='signIn'){
      this.router.navigateByUrl('/signIn');
    }
    else{
      this.router.navigateByUrl('/signUp')
    }
  }
  async viewMyHotelList(){

    

  this.hotelDetails = await this.dataservice.getApiCallData('hotelDetails').toPromise();
  console.log(" this.hotelDetails ", this.hotelDetails );

  if(this.hotelDetails){
    this.hotelDetails.forEach((element:any) => {
      if(element.ownerName == this.ownerName ){
        this.hotelDetailsByOwner.push(element);
      }
    });
  }
  console.log('this.hotelDetailsByOwner',this.hotelDetailsByOwner);

  }
  viewAllHotelList(){
    this.router.navigateByUrl('/hotelDetails')
  }


}
