import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionCurrentComponent } from './consumption-current.component';

describe('ConsumptionCurrentComponent', () => {
  let component: ConsumptionCurrentComponent;
  let fixture: ComponentFixture<ConsumptionCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptionCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
