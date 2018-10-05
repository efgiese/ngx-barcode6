import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBarcode6Component } from './ngx-barcode6.component';

describe('NgxBarcode6Component', () => {
  let component: NgxBarcode6Component;
  let fixture: ComponentFixture<NgxBarcode6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBarcode6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBarcode6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
