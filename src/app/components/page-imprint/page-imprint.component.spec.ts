import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImprintComponent } from './page-imprint.component';

describe('PageImprintComponent', () => {
  let component: PageImprintComponent;
  let fixture: ComponentFixture<PageImprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageImprintComponent]
    });
    fixture = TestBed.createComponent(PageImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
