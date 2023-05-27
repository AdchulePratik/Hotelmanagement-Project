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
    { value: "2 Wheelers", option: "2 wheelers", isActive: false },
    { value: "3 Wheelers", option: "3 wheelers", isActive: false },
    { value: "4 Wheelers", option: "4 wheelers", isActive: false },

  ];
  adminlogin!: FormGroup;
  tandc: any;
  EditData: any;
  editData: any;

   constructor(private dataservice: DataService,
    private router: Router, private fb: FormBuilder) { }

  back() {
    this.signInOrSignUp = this.dataservice.signinOrSignUp;
    if (this.signInOrSignUp == 'signIn') {
      this.router.navigateByUrl('/signIn');
    }
    else {
      this.router.navigateByUrl('/signUp')
    }
  }

  viewAllHotelList() {
    this.router.navigateByUrl('/hotelDetails')
  }

  ngOnInit() {
    if (this.EditData) {
      this.editData = {
        "tc":
        "terms and conditions",
        "name": "Pratik",
        "vehicle": ['2 wheelers', '4 wheelers']
      }
      this.setVehicleCheBoxes()
      this.form();
    }
    else {
      console.log('this.editData', this.editData);
      this.form();

    }
    this.endPoint = this.dataservice.endPoint;
    console.log('this.signInOrSignUp --', this.signInOrSignUp);
  }

  setVehicleCheBoxes() {
    this.Vehicles.forEach(item => {
      this.editData.vehicles.forEach((arrayItem: any) => {
        if (item.value == arrayItem) {
          item.isActive = true;

        }
      })
    })
  }
  
  form() {
    this.adminlogin = this.fb.group({
      name: [this.editData?.name ? this.editData?.name : ''],
      vehicles: [''],
      tc: [this.editData?.tc ? true : false]
    });
  }

  setVehicles(event: any, value: string) {
    console.log(event);
    console.log('value', event.source.value);

    if (event.checked) {
      this.Vehicles.forEach(item => {
        if (value == item.value) {
          item.isActive = true;

        }
        else {
          this.Vehicles.forEach(item => {
            if (value == item.value) {
              item.isActive = false;
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
      if (item.isActive) {
        vehicledata.push(item.value)
      }
    })
    let updatedVehicles = {
      name: this.adminlogin.value.name,
      vehicles: vehicledata,
      tc: this.tandc
    }
    this.adminlogin.setValue(updatedVehicles);
    console.log('this.adminlogin.value', this.adminlogin.value);
  }

  tcValue(event: any) {
    console.log(event.source.value);
    this.tandc = event.source.value;
  }

  submit() {
    this.setValuesForForm;
    console.log(this.adminlogin.value);

  }



}
