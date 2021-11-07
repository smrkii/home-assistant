import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shht1StatusComponent } from './shht1-status.component';

describe('Shht1StatusComponent', () => {
  let component: Shht1StatusComponent;
  let fixture: ComponentFixture<Shht1StatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shht1StatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shht1StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
