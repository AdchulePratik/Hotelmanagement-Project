import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerlandComponent } from './ownerland.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';


const routes: Routes = [
  { path: '', component: OwnerlandComponent },
  { path: 'ownerlogin',component: OwnerloginComponent},
  {path: 'hotelRegistration',component:HotelRegistrationComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerlandRoutingModule { }
