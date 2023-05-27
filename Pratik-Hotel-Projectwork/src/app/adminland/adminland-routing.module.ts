import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlandComponent } from './adminland.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  { path: '', component: AdminlandComponent },
  { path: 'signUp', component:SignUpComponent},
  { path : 'signIn', component:SignInComponent},
  { path:'adminlogin',component:AdminloginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminlandRoutingModule { }
