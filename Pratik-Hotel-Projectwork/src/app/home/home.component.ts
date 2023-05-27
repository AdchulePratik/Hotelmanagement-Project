import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  // images = ["../../assets/userland2.jpg",]
  // images = ["assets/images/avert2.gif","assets/images/HotelPackage2.gif","assets/images/HotelPackage3.gif"];
  images = "assets/images/avert2.gif"


  constructor( private router :Router, private dataservice:DataService){

  }
  journey(Data:any){
    this.dataservice.endPoint = Data;
    console.log("service endpoint", this.dataservice.endPoint);

    if( Data === 'admin'){
      this.router.navigateByUrl('/adminland')
    }
    else if( Data === 'owner'){
      this.router.navigateByUrl('/ownerland')
    }
    else{
      this.router.navigateByUrl('/userland')
    }



  }

}
