import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToPdfMakeComponent } from './html-to-pdf-make.component';

describe('HtmlToPdfMakeComponent', () => {
  let component: HtmlToPdfMakeComponent;
  let fixture: ComponentFixture<HtmlToPdfMakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlToPdfMakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlToPdfMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
