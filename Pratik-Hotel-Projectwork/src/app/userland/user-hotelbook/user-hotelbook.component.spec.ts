import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHotelbookComponent } from './user-hotelbook.component';

describe('UserHotelbookComponent', () => {
  let component: UserHotelbookComponent;
  let fixture: ComponentFixture<UserHotelbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHotelbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHotelbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
