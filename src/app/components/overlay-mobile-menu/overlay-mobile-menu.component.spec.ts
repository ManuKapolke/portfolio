import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayMobileMenuComponent } from './overlay-mobile-menu.component';

describe('OverlayMobileMenuComponent', () => {
  let component: OverlayMobileMenuComponent;
  let fixture: ComponentFixture<OverlayMobileMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayMobileMenuComponent]
    });
    fixture = TestBed.createComponent(OverlayMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
