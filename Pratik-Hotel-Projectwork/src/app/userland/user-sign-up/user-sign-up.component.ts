import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})

export class UserSignUpComponent {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  usersignUpForm!: FormGroup;
  passwordMatch: boolean = false;
  password: any;
  confirmPassword: any;
  confirmPasswordMatch: boolean = false;
  endPoint: any;
  cities: any = [
    { cityName: "Banglore", selected: false },
    { cityName: "Pune", selected: false },
    { cityName: "Mumbai", selected: false },
    { cityName: "Nashik", selected: false }
  ]

  constructor(private fb: FormBuilder,
    private router: Router, private dataservice: DataService) { }

  back() {
    this.router.navigateByUrl('/userland');
  }

  ngOnInit() {
    this.endPoint = this.dataservice.endPoint
    this.signUp();

  }

  signUp() {
    this.usersignUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z]*')]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*'), Validators.maxLength(10)]],
      Password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[A-Za-z0-9]*$')]],
      confirmPassword: ['', [Validators.required]],
      TnC: ['', [Validators.requiredTrue]],
      gender: [],
      email: ['', [Validators.required]],
      city: ['', [Validators.required]],
      cities1: this.fb.array([])
    })
  }

  visiblity() {
    this.showPassword = !this.showPassword;
  }

  onChange(event: any, i: number) {
    const cities = (<FormArray>(
      this.usersignUpForm.get("cities")
    )) as FormArray;
    console.log(event.checked, i);
    if (event.checked) {
      cities.push(new FormControl(event.source.value));
    }
  }

  get city1() {
    return this.usersignUpForm.controls["cities1"] as FormArray;

  }

  passwordValidation(pass: any) {
    this.password = pass.target.value;
    console.log('password', pass.target.value);

    if (this.password == this.confirmPassword) {
      this.passwordMatch = false;
    }
    else {
      this.passwordMatch = true;
    }
  }

  confirmpasswordValidation(confirmpass: any) {
    this.confirmPassword = confirmpass.target.value;
    console.log('confirm', confirmpass.target.value);

    if (this.password == this.confirmPassword) {
      this.passwordMatch = false;
    }
    else {
      this.passwordMatch = true;
    }
  }

  submit() {

    console.log('this.cities', this.cities);

    this.dataservice.postApiCall(this.endPoint, this.usersignUpForm.value).subscribe(response => {
      this.dataservice.signinOrSignUp = 'usersignUp';

      if (this.endPoint == 'admin') {
        this.router.navigateByUrl('adminland/adminlogin')
      }
      else if (this.endPoint == 'user') {
        this.router.navigateByUrl('userland/userlogin')
      }
      else {
        this.router.navigateByUrl('userland/userlogin')
      }

    })
  }



}
