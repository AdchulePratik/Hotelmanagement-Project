import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-hotelbook',
  templateUrl: './user-hotelbook.component.html',
  styleUrls: ['./user-hotelbook.component.scss']
})
export class UserHotelbookComponent {
  endPoint!: string;
  apiHotel: any;
  hotelBook: any;

  _searchInput!: string;
  get searchInput() {
    return this._searchInput;
  }
  set searchInput(value: string) {
    this._searchInput = value;
    this.hotelBook = this.implementingFilter(value);
  }

  constructor(private dataservice: DataService, private router: Router) { }


  back() {
    if (this.endPoint == 'admin') {
      this.router.navigateByUrl('adminland')
    }
    else if (this.endPoint == 'user') {
      this.router.navigateByUrl('userland')
    }
    else {
      this.router.navigateByUrl('userland')
    }
  }


  ngOnInit() {
    this.dataservice.gethotelBooks().subscribe((book: any) => {
      this.apiHotel = book;
      this.hotelBook = this.apiHotel
      console.log(this.hotelBook);
    })
  }

  implementingFilter(inputValue: string) {
    this.hotelBook = this.apiHotel;
    if (inputValue === "") {
      return this.hotelBook;
    } else {
      return this.hotelBook.filter((hotel: any) => {
        // return hotel.hotelName === inputValue;
        return JSON.stringify(hotel).toLowerCase().includes(inputValue);
      })
    }
  }

  displayHotel(id: number) {
    this.dataservice.selectedHotel = this.apiHotel.filter((hotel: any) => {
      return hotel.id === id
    })
    this.router.navigateByUrl('/userland/yourbook')

  }







}
