import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourhotelbookComponent } from './yourhotelbook.component';

describe('YourhotelbookComponent', () => {
  let component: YourhotelbookComponent;
  let fixture: ComponentFixture<YourhotelbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourhotelbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourhotelbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
