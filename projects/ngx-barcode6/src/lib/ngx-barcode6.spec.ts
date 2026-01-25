import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { NgxBarcode6Component } from './ngx-barcode6.component';

describe('NgxBarcode6Component', () => {
  let barcode6: NgxBarcode6Component;
  let fixture: ComponentFixture<NgxBarcode6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxBarcode6Component],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBarcode6Component);
    barcode6 = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(barcode6).toBeDefined();
  });

  it('should have the CSS-Class default value "barcode"', () => {
    fixture.detectChanges();

    const containerEl = fixture.debugElement.query(By.css('.barcode')).nativeElement;
    expect(containerEl.className).toContain('barcode');
  });
});

import { Component } from '@angular/core';

@Component({
  standalone: false,
  template: `
  <ngx-barcode6
    [bc-format]="code"
    [bc-value]="value"
    [bc-display-value]="display"
    [bc-element-type]="elementType">
  </ngx-barcode6>`
})
class TestNgxBarcode6Component {
  code = 'CODE128';
  value = '';
  display = true;
  elementType = 'svg';
}

describe('NgxBarcode6Component inside a test host', () => {
  let testHost: TestNgxBarcode6Component;
  let fixture: ComponentFixture<TestNgxBarcode6Component>;
  let containerEl: HTMLElement;
  let barcodeEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxBarcode6Component, TestNgxBarcode6Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgxBarcode6Component);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the CSS-Class default value "barcode"', () => {
    containerEl = fixture.nativeElement.querySelector('.barcode');

    expect(containerEl.className).toContain('barcode');
  });

  it('should be no barcode with no value', () => {
    testHost.code = 'CODE128';
    testHost.value = '';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl).toBeNull();
  });

  it('should encode all 128 ASCII characters and numbers', () => {
    testHost.code = 'CODE128';
    testHost.value = 'Example_128_1234567890';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);

    testHost.value = 'Example_1234567890';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode all 128 ASCII characters and numbers (elementType="img")', () => {
    testHost.code = 'CODE128';
    testHost.value = 'Example_128_1234567890';
    testHost.elementType = 'img';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('img');
    expect(barcodeEl.attributes.length).toBeGreaterThan(0);
  });

  it('should encode all 128 ASCII characters and numbers (elementType="canvas")', () => {
    testHost.code = 'CODE128';
    testHost.value = 'Example_128_1234567890';
    testHost.elementType = 'canvas';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('canvas');
    expect(barcodeEl.attributes.length).toBeGreaterThan(0);
  });

  it('should encode on CODE128A ASCII, numbers and non printable characters', () => {
    testHost.code = 'CODE128A';
    testHost.value = 'EXAMPLE\n1234';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode on CODE128B ASCII and numbers', () => {
    testHost.code = 'CODE128B';
    testHost.value = 'Example1234';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode on CODE128C only numbers', () => {
    testHost.code = 'CODE128C';
    testHost.value = '12345678';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('fails encode non numbers on CODE128C', () => {
    testHost.code = 'CODE128C';
    testHost.value = 'Example12345678';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).not.toBeGreaterThan(0);
  });

  it('fails encode non numbers on CODE128C (elementType="img")', () => {
    testHost.code = 'CODE128C';
    testHost.value = 'Example12345678';
    testHost.elementType = 'img';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('img');
    expect(barcodeEl.attributes.length).not.toBeGreaterThan(0);
  });

  it('fails encode non numbers on CODE128C (elementType="canvas")', () => {
    testHost.code = 'CODE128C';
    testHost.value = 'Example12345678';
    testHost.elementType = 'canvas';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('canvas');
    expect(barcodeEl.attributes.length).not.toBeGreaterThan(0);
  });

  it('should encode numbers with 13 digits on EAN13', () => {
    testHost.code = 'EAN13';
    testHost.value = '5901234123457';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode numbers with 12 digits on UPC', () => {
    testHost.code = 'UPC';
    testHost.value = '123456789999';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode numbers with 8 digits on EAN8', () => {
    testHost.code = 'EAN8';
    testHost.value = '96385074';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode numbers with 5 digits on EAN5', () => {
    testHost.code = 'EAN5';
    testHost.value = '54495';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode numbers with 2 digits on EAN2', () => {
    testHost.code = 'EAN2';
    testHost.value = '53';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode numbers, uppercase letters and a number of special characters (-, ., $, /, +, %, and space) on CODE39', () => {
    testHost.code = 'CODE39';
    testHost.value = 'CODE39 Barcode';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode numbers with 14 digits on ITF-14 (Interleaved Two of Five)', () => {
    testHost.code = 'ITF14';
    testHost.value = '12345678901231';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode even number of digits to ITF', () => {
    testHost.code = 'ITF';
    testHost.value = '123456';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode numbers with 0-9 digits on MSI', () => {
    testHost.code = 'MSI';
    testHost.value = '1234';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode numbers with 0-9 digits on MSI10', () => {
    testHost.code = 'MSI10';
    testHost.value = '1234';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
    if (barcodeEl.children[1].lastChild !== null) {
      expect(barcodeEl.children[1].lastChild.textContent).toEqual('12344');
    }
  });

  it('should encode numbers with 0-9 digits on MSI11', () => {
    testHost.code = 'MSI11';
    testHost.value = '1234';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
    if (barcodeEl.children[1].lastChild !== null) {
      expect(barcodeEl.children[1].lastChild.textContent).toEqual('12343');
    }
  });

  it('should encode numbers with 0-9 digits on MSI1010', () => {
    testHost.code = 'MSI1010';
    testHost.value = '1234';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
    if (barcodeEl.children[1].lastChild !== null) {
      expect(barcodeEl.children[1].lastChild.textContent).toEqual('123448');
    }
  });

  it('should encode numbers with 0-9 digits on MSI1110', () => {
    testHost.code = 'MSI1110';
    testHost.value = '1234';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
    if (barcodeEl.children[1].lastChild !== null) {
      expect(barcodeEl.children[1].lastChild.textContent).toEqual('123430');
    }
  });

  it('should encode numbers 3 to 131070 on pharmacode', () => {
    testHost.code = 'pharmacode';
    testHost.value = '1234';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });

  it('should encode numbers and a number of special characters (-, $, :, /, +, .) on codabar', () => {
    testHost.code = 'codabar';
    testHost.value = '1234567890';
    fixture.detectChanges();

    barcodeEl = fixture.nativeElement.querySelector('svg');
    expect(barcodeEl.childNodes.length).toBeGreaterThan(0);
  });
});
