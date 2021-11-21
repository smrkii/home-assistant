import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbControllerEditComponent } from './rgb-controller-edit.component';

describe('RgbControllerEditComponent', () => {
  let component: RgbControllerEditComponent;
  let fixture: ComponentFixture<RgbControllerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgbControllerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbControllerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
