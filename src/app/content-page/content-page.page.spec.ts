import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentPagePage } from './content-page.page';

describe('ContentPagePage', () => {
  let component: ContentPagePage;
  let fixture: ComponentFixture<ContentPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
