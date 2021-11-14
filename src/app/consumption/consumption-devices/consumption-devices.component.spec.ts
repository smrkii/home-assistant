import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionDevicesComponent } from './consumption-devices.component';

describe('ConsumptionDevicesComponent', () => {
  let component: ConsumptionDevicesComponent;
  let fixture: ComponentFixture<ConsumptionDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptionDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
