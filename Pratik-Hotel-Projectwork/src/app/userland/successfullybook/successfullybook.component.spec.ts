import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullybookComponent } from './successfullybook.component';

describe('SuccessfullybookComponent', () => {
  let component: SuccessfullybookComponent;
  let fixture: ComponentFixture<SuccessfullybookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullybookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfullybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
