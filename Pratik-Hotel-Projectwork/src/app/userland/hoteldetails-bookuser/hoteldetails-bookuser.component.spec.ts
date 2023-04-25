import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteldetailsBookuserComponent } from './hoteldetails-bookuser.component';

describe('HoteldetailsBookuserComponent', () => {
  let component: HoteldetailsBookuserComponent;
  let fixture: ComponentFixture<HoteldetailsBookuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteldetailsBookuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoteldetailsBookuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
