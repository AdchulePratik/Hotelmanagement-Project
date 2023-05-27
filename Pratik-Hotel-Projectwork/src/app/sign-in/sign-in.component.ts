import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {
  signInform!: FormGroup;
  // endPoint:any;
  getApiData: any;
  endPoint: any;

  constructor(private fb: FormBuilder,
    private dataservice: DataService, private router: Router,
    private snackbar: MatSnackBar) { }

  back() {
    if (this.endPoint == 'admin') {
      this.router.navigateByUrl('adminland')
    }
    else if (this.endPoint == 'owner') {
      this.router.navigateByUrl('ownerland')
    }
    else {
      this.router.navigateByUrl('ownerland')
    }
  }

  ngOnInit() {
    this.endPoint = this.dataservice.endPoint;
    console.log(" this.endPoint ", this.endPoint);

    this.login();
  }
  login() {
    this.signInform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z]*$")]],
      password: ['', [Validators.required]]
    })
  }

  async submit() {
    console.log('login', this.signInform.value);
    this.getApiData = await this.dataservice.getApiCall(this.endPoint).toPromise();

    let loginData = this.getApiData.find((ele: any) => {
      return ele.name === this.signInform.value.name && ele.Password === this.signInform.value.password
    })
    if (loginData) {
      this.dataservice.signinOrSignUp = 'signIn';

      if (this.endPoint == 'admin') {
        // alert('login successfully');
        const panelCss = new MatSnackBarConfig();
        panelCss.verticalPosition = 'top';
        this.snackbar.open('Login successfully', 'Close', panelCss);
        this.router.navigateByUrl('adminland/adminlogin')
      }
      else if (this.endPoint == 'owner') {
        alert('login successfully');
        // this.dataservice.ownerName = this.loginform.value.name;
        this.dataservice.ownerName = 'Pratik';
        this.router.navigateByUrl('/ownerland/ownerlogin')
      }
      else {
        this.router.navigateByUrl('/userland/userlogin')
      }
    }
    else {
      alert('User not Fount')
      this.signInform.reset();
      this.router.navigateByUrl('/signIn');

    }
  }



}
