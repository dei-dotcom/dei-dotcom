import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarRegisterPage } from './car-register.page';

describe('CarRegisterPage', () => {
  let component: CarRegisterPage;
  let fixture: ComponentFixture<CarRegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
