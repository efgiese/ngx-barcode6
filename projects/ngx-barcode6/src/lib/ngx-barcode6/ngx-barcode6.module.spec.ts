import { NgxBarcode6Module } from './ngx-barcode6.module';

describe('NgxBarcode6Module', () => {
  let ngxBarcode6Module: NgxBarcode6Module;

  beforeEach(() => {
    ngxBarcode6Module = new NgxBarcode6Module();
  });

  it('should create an instance', () => {
    expect(ngxBarcode6Module).toBeTruthy();
  });
});
