import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbControllerStatusComponent } from './rgb-controller-status.component';

describe('RgbControllerStatusComponent', () => {
  let component: RgbControllerStatusComponent;
  let fixture: ComponentFixture<RgbControllerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgbControllerStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbControllerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
