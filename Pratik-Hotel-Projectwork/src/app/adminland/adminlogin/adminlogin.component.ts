import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {
  endPoint: any;
  signInOrSignUp: any;
  Vehicles = [
    { value: "2 Wheelers", option: "2 wheelers", isAactive: false },
    { value: "4 Wheelers", option: "4 wheelers", isAactive: false },
  ];
  formdata!: FormGroup;


  constructor(private dataservice: DataService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit() {

    this.endPoint = this.dataservice.endPoint;
    this.signInOrSignUp = this.dataservice.signinOrSignUp;
    console.log('this.signInOrSignUp --', this.signInOrSignUp);

    this.formdata = this.fb.group({
      vehicles: ''
    });

  }

  viewHotelList() {
    this.router.navigateByUrl('/hotelDetails');

  }
  back() {
    if (this.signInOrSignUp == 'signIn') {
      this.router.navigateByUrl('/signIn');
    }
    else {
      this.router.navigateByUrl('/signUp')
    }
  }
  setVehicles(event: any, value: string) {
    console.log(event);
    console.log('event', event);

    if (event.checked) {
      this.Vehicles.forEach(item => {
        if (value == item.value) {
          item.isAactive = true;

        }
        else {
          this.Vehicles.forEach(item => {
            if (value == item.value) {
              item.isAactive = false;
            }
          })
        }
      })
    }
    console.log('this Vehicles', this.Vehicles);
    this.setValuesForForm()
  }
  setValuesForForm() {
    let vehicledata: any = [];
    this.Vehicles.forEach(item => {
      if (item.isAactive) {
        vehicledata.push(item.value)
      }
    })
    let updatedVehicles = {
      vehicles: vehicledata
    }
    this.formdata.setValue(updatedVehicles);
    console.log('this.formdata.value', this.formdata.value);
  }
  submit(){
    console.log(this.formdata.value);

  }



}
