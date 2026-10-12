import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddReminderPage } from './add-reminder.page';

describe('AddReminderPage', () => {
  let component: AddReminderPage;
  let fixture: ComponentFixture<AddReminderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
