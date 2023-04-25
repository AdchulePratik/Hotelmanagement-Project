import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent {
  hotelDetails: any;
  tableHeadings = ["Hotel Name", "Owner Name", "Hotel Contact No",
    "Hotel Address", "Hotel Email", "Rooms", "Speciality", "Delete", "Edit"];
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
    else if (this.endpoint == 'owner') {
      this.router.navigateByUrl('ownerland/ownerlogin');

    }
    else {
      this.router.navigateByUrl('ownerland/ownerlogin');

    }
  }
}




