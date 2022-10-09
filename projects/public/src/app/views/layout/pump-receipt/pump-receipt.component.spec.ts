import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpReceiptComponent } from './pump-receipt.component';

describe('PumpReceiptComponent', () => {
  let component: PumpReceiptComponent;
  let fixture: ComponentFixture<PumpReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
