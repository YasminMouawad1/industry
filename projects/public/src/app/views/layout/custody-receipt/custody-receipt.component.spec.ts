import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustodyReceiptComponent } from './custody-receipt.component';

describe('CustodyReceiptComponent', () => {
  let component: CustodyReceiptComponent;
  let fixture: ComponentFixture<CustodyReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustodyReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustodyReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
