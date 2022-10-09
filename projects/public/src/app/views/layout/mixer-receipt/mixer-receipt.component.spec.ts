import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixerReceiptComponent } from './mixer-receipt.component';

describe('MixerReceiptComponent', () => {
  let component: MixerReceiptComponent;
  let fixture: ComponentFixture<MixerReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixerReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixerReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
