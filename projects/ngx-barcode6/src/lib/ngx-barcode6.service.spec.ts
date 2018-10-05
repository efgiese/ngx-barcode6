import { TestBed } from '@angular/core/testing';

import { NgxBarcode6Service } from './ngx-barcode6.service';

describe('NgxBarcode6Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBarcode6Service = TestBed.get(NgxBarcode6Service);
    expect(service).toBeTruthy();
  });
});
