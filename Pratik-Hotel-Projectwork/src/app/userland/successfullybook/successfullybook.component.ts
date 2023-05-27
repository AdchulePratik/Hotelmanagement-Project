import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successfullybook',
  templateUrl: './successfullybook.component.html',
  styleUrls: ['./successfullybook.component.scss']
})

export class SuccessfullybookComponent {

  constructor(private router: Router){}


  back(){
    this.router.navigateByUrl('/userland')
  }

}
