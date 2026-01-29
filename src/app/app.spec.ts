import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { App } from './app';

import { NgxBarcode6 } from 'ngx-barcode6';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App,
        FormsModule,
        NgxBarcode6
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngx-barcode6'`, () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngx-barcode6');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    // Set empty value to prevent barcode rendering in test
    app.selectedBarcodeObj.set({ name: '', value: '', example: '' });
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('ngx-barcode6');
  });
});
