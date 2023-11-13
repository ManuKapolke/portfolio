import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboveTheFoldComponent } from './section-above-the-fold.component';

describe('SectionAboveTheFoldComponent', () => {
  let component: SectionAboveTheFoldComponent;
  let fixture: ComponentFixture<SectionAboveTheFoldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAboveTheFoldComponent]
    });
    fixture = TestBed.createComponent(SectionAboveTheFoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
