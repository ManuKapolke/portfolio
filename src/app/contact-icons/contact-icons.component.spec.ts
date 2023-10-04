import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIconsComponent } from './contact-icons.component';

describe('ContactIconsComponent', () => {
  let component: ContactIconsComponent;
  let fixture: ComponentFixture<ContactIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactIconsComponent]
    });
    fixture = TestBed.createComponent(ContactIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
