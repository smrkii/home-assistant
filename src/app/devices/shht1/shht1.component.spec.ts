import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shht1Component } from './shht1.component';

describe('Shht1Component', () => {
  let component: Shht1Component;
  let fixture: ComponentFixture<Shht1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shht1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shht1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
