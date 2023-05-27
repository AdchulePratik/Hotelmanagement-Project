import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
// import { MatDialogRef,MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})

export class BooknowComponent {
  hide = true;
  hotelTobeBooked!: any;
  hotelName!: string;
  bookingFormData!: FormGroup;

  constructor(private formbuild: FormBuilder, private dataservice: DataService, private router: Router, private toaster: ToastrService) { }

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
    this.bookingFormData = this.formbuild.group({
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
