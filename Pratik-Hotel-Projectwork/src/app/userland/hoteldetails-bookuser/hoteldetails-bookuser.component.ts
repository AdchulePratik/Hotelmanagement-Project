import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hoteldetails-bookuser',
  templateUrl: './hoteldetails-bookuser.component.html',
  styleUrls: ['./hoteldetails-bookuser.component.scss']
})
export class HoteldetailsBookuserComponent {
  hotelDetails: any;
  tableHeadings = ["Hotel Name", "Owner Name", "Hotel Contact No",
    "Hotel Address", "Hotel Email", "Rooms", "Speciality"];
  endpoint!: string;
  hotelEndPoint = "hotelDetails";
  inputBoxValue: any;





  constructor(private dataservice: DataService,
    private router: Router) {

  }

  ngOnInit() {
    this.endpoint = this.dataservice.endPoint;
    this.getHotelDetails();
  }
  async getHotelDetails() {
    this.hotelDetails = await this.dataservice.getApiCall(this.hotelEndPoint).toPromise();
    console.log('this.hotelDetails', this.hotelDetails);

  }
  async delete(id: number) {
    await this.dataservice.deleteApiCall(this.hotelEndPoint, id).toPromise();
    this.getHotelDetails();
  }
  async edit(id:number){
    await this.dataservice.getApiCall(this.hotelEndPoint,id).toPromise();
    this.getHotelDetails();



  }
  back() {
    if (this.endpoint == 'admin') {
      this.router.navigateByUrl('/adminland/adminlogin');
    }
    else if (this.endpoint == 'user') {
      this.router.navigateByUrl('userland/userlogin');

    }
    {
      this.router.navigateByUrl('userland/userlogin');

    }
  }
  booknow(){
    this.router.navigateByUrl('/userland/booknow');
  }



}
