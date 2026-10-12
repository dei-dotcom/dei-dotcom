import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReminderPage } from './reminder.page';

describe('ReminderPage', () => {
  let component: ReminderPage;
  let fixture: ComponentFixture<ReminderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
