import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarReceiptComponent } from './car-receipt.component';

describe('CarReceiptComponent', () => {
  let component: CarReceiptComponent;
  let fixture: ComponentFixture<CarReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
