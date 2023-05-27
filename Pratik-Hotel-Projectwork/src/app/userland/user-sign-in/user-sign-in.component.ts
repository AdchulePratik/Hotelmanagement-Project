import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss']
})
export class UserSignInComponent {
  usersignIn!: FormGroup;
  // endPoint:any;
  getApiData: any;
  endPoint: any;

  constructor(private fb: FormBuilder,
    private dataservice: DataService, private router: Router) { }

  back() {
    if (this.endPoint == 'admin') {
      this.router.navigateByUrl('/adminland')
    }
    else if (this.endPoint == 'user') {
      this.router.navigateByUrl('/userland')
    }
    else {
      this.router.navigateByUrl('/userland')
    }
  }

  ngOnInit() {
    this.endPoint = this.dataservice.endPoint;
    console.log(" this.endPoint ", this.endPoint);

    this.login();
  }

  login() {
    this.usersignIn = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z]*$")]],
      password: ['', [Validators.required]]
    })
  }

  async submit() {
    console.log('usersignIn', this.usersignIn.value);
    this.getApiData = await this.dataservice.getApiCall(this.endPoint).toPromise();

    let loginData = this.getApiData.find((ele: any) => {
      return ele.name === this.usersignIn.value.name && ele.Password === this.usersignIn.value.password
    })
    if (loginData) {
      this.dataservice.signinOrSignUp = 'usersignIn';

      if (this.endPoint == 'admin') {
        alert('login successfully');
        this.router.navigateByUrl('adminland/adminlogin')
      }
      else if (this.endPoint == 'owner') {
        alert('login successfully');
        this.dataservice.ownerName = this.usersignIn.value.name;
        this.router.navigateByUrl('userland/userlogin')
      }
      else {
        this.router.navigateByUrl('userland/userlogin')
      }
    }
    else {
      alert('User not Fount')
      this.usersignIn.reset();
      this.router.navigateByUrl('/usersignIn');

    }
  }




}
