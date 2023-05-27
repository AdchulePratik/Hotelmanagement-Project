import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-myhotel-list',
  templateUrl: './view-myhotel-list.component.html',
  styleUrls: ['./view-myhotel-list.component.scss']
})
export class ViewMyhotelListComponent {
  endpoint!: string;
  hotelTobeBooked: any;
  bookingFormData: any;
  fb: any;
  // endPoint: any;
  // signInOrSignUp: any;
  // ownerName: any;
  // hotelDetails: any;
  // hotelDetailsByOwner: any = [];
  // hotelEndPoint = 'hotelDetails';
  // inputBoxValue: any;
  // tableHeadings = ["Hotel Name", "Owner Name", "Hotel Contact No", "Hotel Address", "Hotel Emails",
  //   "Total Rooms", "Speciality", "Delete", "Edit"];
  // hotelDetailsById: any;




  constructor(private dataservice: DataService,
    private router: Router,private formbuild: FormBuilder,private toaster: ToastrService) { }




  back() {
    if (this.endpoint == 'admin') {
      this.router.navigateByUrl('/adminland');
    }
    else if (this.endpoint == 'owner') {
      this.router.navigateByUrl('/ownerland');
    }
    else {
      this.router.navigateByUrl('/ownerland');
    }
  }

  ngOnInit() {
    this.settingBookingForm();
    this.hotelTobeBooked = this.dataservice.selectedHotel;
    // this.hotelName = this.hotelTobeBooked.hotelName
    console.log(this.hotelTobeBooked);

  }

  ngAfterViewInit() {
    // this.settingBookingForm();
  }

  settingBookingForm() {
    this.bookingFormData = this.fb.group({
      fname: ["", [Validators.required, this.nospace]],
      lname: ["", [Validators.required, this.nospace]],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", [Validators.required, this.nospace]],
      arrivalDate: [""],
      departureDate: [""],
      guests: [1],
      address: [""],
      city: [""],
      state: [""],
      pin: [""],
      paymentMethod: ["upi"]
    })
  }

  onSubmit() {
    console.log(this.bookingFormData);
    console.log(this.bookingFormData.value);
    // alert("Hotel Booked Successfully");
    this.toaster.success(`Hotel Booked`, `Successful`)
    this.router.navigateByUrl('/userland/hotelsuccess');
  }

  nospace(control: FormControl) {
    if (control.value != null && control.value.indexOf(" ") != -1) {
      return { nospace: true };
      // return null;

    } else {
      return null;
      // return {nospace : true};
    }
  }



}
