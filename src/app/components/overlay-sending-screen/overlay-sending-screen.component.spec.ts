import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaySendingScreenComponent } from './overlay-sending-screen.component';

describe('OverlaySendingScreenComponent', () => {
  let component: OverlaySendingScreenComponent;
  let fixture: ComponentFixture<OverlaySendingScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlaySendingScreenComponent]
    });
    fixture = TestBed.createComponent(OverlaySendingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
