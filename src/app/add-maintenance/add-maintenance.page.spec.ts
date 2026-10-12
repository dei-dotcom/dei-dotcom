import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMaintenancePage } from './add-maintenance.page';

describe('AddMaintenancePage', () => {
  let component: AddMaintenancePage;
  let fixture: ComponentFixture<AddMaintenancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
