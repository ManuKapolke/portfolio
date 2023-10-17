import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingScreenComponent } from './sending-screen.component';

describe('SendingScreenComponent', () => {
  let component: SendingScreenComponent;
  let fixture: ComponentFixture<SendingScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendingScreenComponent]
    });
    fixture = TestBed.createComponent(SendingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
