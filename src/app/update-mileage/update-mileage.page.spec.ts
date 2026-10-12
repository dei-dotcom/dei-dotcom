import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMileagePage } from './update-mileage.page';

describe('UpdateMileagePage', () => {
  let component: UpdateMileagePage;
  let fixture: ComponentFixture<UpdateMileagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMileagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
