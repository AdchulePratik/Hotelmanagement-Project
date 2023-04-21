import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyhotelListComponent } from './view-myhotel-list.component';

describe('ViewMyhotelListComponent', () => {
  let component: ViewMyhotelListComponent;
  let fixture: ComponentFixture<ViewMyhotelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyhotelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyhotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
