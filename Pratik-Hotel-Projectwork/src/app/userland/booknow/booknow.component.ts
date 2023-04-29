import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
// import { MatDialogRef,MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { AuthService } from '../auth.service';


// interface Food {
//   value: string;
//   viewValue: string;
// }

// interface Number {
//   value: string;
//   viewValue: string;
// }


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

  constructor(private formbuild: FormBuilder, private dataServ: DataService, private router: Router, private toaster: ToastrService){ }

  ngOnInit(){
    this.settingBookingForm();
    this.hotelTobeBooked = this.dataServ.selectedHotel;
    // this.hotelName = this.hotelTobeBooked.hotelName
    console.log(this.hotelTobeBooked);

  }
  ngAfterViewInit(){
    // this.settingBookingForm();
  }

  settingBookingForm(){
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

  onSubmit(){
    console.log(this.bookingFormData);
    console.log(this.bookingFormData.value);
    // alert("Hotel Booked Successfully");
    this.toaster.success(`Hotel Booked`,`Successful`)
    this.router.navigateByUrl('/userland/userlogin');
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  // getNospaceErrorMessage() {
  //   if (this.fname.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.fname.hasError('nospace') ? '' : 'No space allowed';
  // }

  nospace(control: FormControl){
    if(control.value != null && control.value.indexOf(" ") != -1){
      return {nospace : true};
      // return null;

    }else{
      return null;
      // return {nospace : true};
    }
  }

  // service: any;

  // constructor(
  //   private builder: FormBuilder,
  //   private dialog: MatDialogRef<BooknowComponent>,

  //   // private service: AuthService,
  //   private toastr : ToastrService,
  //   private router : Router
  // ) { }

  // foods: Food[] = [
  //   { value: 'net-banking', viewValue: 'Net-Banking' },
  //   { value: 'upi', viewValue: 'UPI' },
  //   { value: 'qr', viewValue: 'QR' },
  // ];

  // numbers: Number[] = [
  //   { value: '1', viewValue: '1' },
  //   { value: '2', viewValue: '2' },
  //   { value: '3', viewValue: '3' },
  // ];

  // range = this.builder.group({
  //   start: new FormControl<Date | null>(null),
  //   end: new FormControl<Date | null>(null),
  //   fullname: this.builder.control('', Validators.compose([Validators.required])),
  //   email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
  //   phone: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(10)])),
  //   payment: this.builder.control('', Validators.required),
  //   guests: this.builder.control('', Validators.required),
  //   rooms: this.builder.control('', Validators.required),
  // });

  // hotelBook() {
  //   if (this.range.valid) {
  //     this.service.BookHotel(this.range.value).subscribe((res:object) => {
  //       this.toastr.success('Registered Successfully !!')
  //       this.dialog.close()
  //       this.router.navigateByUrl('userland/home')
  //     });
  //   } else {
  //     console.log("please enter valid data")
  //     this.toastr.warning("please enter valid data ")
  //   }
  // }


}
