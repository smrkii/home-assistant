import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionOverallComponent } from './consumption-overall.component';

describe('ConsumptionOverallComponent', () => {
  let component: ConsumptionOverallComponent;
  let fixture: ComponentFixture<ConsumptionOverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptionOverallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
