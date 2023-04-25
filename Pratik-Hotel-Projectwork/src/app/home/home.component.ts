import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
