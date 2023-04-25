import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelregistrationForm2Component } from './hotelregistration-form2.component';

describe('HotelregistrationForm2Component', () => {
  let component: HotelregistrationForm2Component;
  let fixture: ComponentFixture<HotelregistrationForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelregistrationForm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelregistrationForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
