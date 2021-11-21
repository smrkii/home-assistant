import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shht1EditComponent } from './shht1-edit.component';

describe('Shht1EditComponent', () => {
  let component: Shht1EditComponent;
  let fixture: ComponentFixture<Shht1EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shht1EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shht1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
