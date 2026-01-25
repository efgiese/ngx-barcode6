import { AfterViewInit, ChangeDetectionStrategy, Component, effect, ElementRef, inject, input, Renderer2, viewChild } from '@angular/core';

import jsbarcode from 'jsbarcode';

@Component({
  selector: 'ngx-barcode6',
  imports: [],
  template: `<div #bcElement [class]="cssClass()"></div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxBarcode6 implements AfterViewInit {

  elementType = input<'svg' | 'img' | 'canvas'>('svg', { alias: 'bc-element-type' });
  cssClass = input<string>('barcode', { alias: 'bc-class' });

  format = input<string | '' | 'CODE128' | 'CODE128A' | 'CODE128B' | 'CODE128C' | 'EAN13' | 'UPC' | 'EAN8' | 'EAN5' |
    'EAN2' | 'CODE39' | 'ITF' | 'ITF14' | 'MSI' | 'MSI10' | 'MSI11' | 'MSI1010' | 'MSI1110' | 'pharmacode' | 'codabar'>('CODE128', { alias: 'bc-format' });
  lineColor = input<string>('#000000', { alias: 'bc-line-color' });
  width = input<number>(2, { alias: 'bc-width' });
  height = input<number>(100, { alias: 'bc-height' });
  displayValue = input<boolean>(false, { alias: 'bc-display-value' });
  fontOptions = input<string>('', { alias: 'bc-font-options' });
  font = input<string>('monospace', { alias: 'bc-font' });
  textAlign = input<string>('center', { alias: 'bc-text-align' });
  textPosition = input<string>('bottom', { alias: 'bc-text-position' });
  textMargin = input<number>(2, { alias: 'bc-text-margin' });
  fontSize = input<number>(20, { alias: 'bc-font-size' });
  background = input<string>('#ffffff', { alias: 'bc-background' });
  margin = input<number>(10, { alias: 'bc-margin' });
  marginTop = input<number>(10, { alias: 'bc-margin-top' });
  marginBottom = input<number>(10, { alias: 'bc-margin-bottom' });
  marginLeft = input<number>(10, { alias: 'bc-margin-left' });
  marginRight = input<number>(10, { alias: 'bc-margin-right' });
  value = input<string>('', { alias: 'bc-value' });
  valid = input<() => boolean>(() => true, { alias: 'bc-valid' });

  bcElement = viewChild.required<ElementRef>('bcElement');

  private renderer = inject(Renderer2);

  constructor() {
    effect(() => {
      // Track all input signals
      const barcodeValue = this.value();
      const element = this.bcElement();

      // Only create barcode if we have both value and element
      if (element && barcodeValue) {
        this.createBarcode();
      }
    });
  }

  get options(): any {
    return {
      format: this.format(),
      lineColor: this.lineColor(),
      width: this.width(),
      height: this.height(),
      displayValue: this.displayValue(),
      fontOptions: this.fontOptions(),
      font: this.font(),
      textAlign: this.textAlign(),
      textPosition: this.textPosition(),
      textMargin: this.textMargin(),
      fontSize: this.fontSize(),
      background: this.background(),
      margin: this.margin(),
      marginTop: this.marginTop(),
      marginBottom: this.marginBottom(),
      marginLeft: this.marginLeft(),
      marginRight: this.marginRight(),
      valid: this.valid(),
    };
  }

  ngAfterViewInit(): void {
    // Initial barcode creation is handled by effect
  }

  createBarcode(): void {
    const barcodeValue = this.value();
    if (!barcodeValue) { return; }
    let element: Element;
    switch (this.elementType()) {
      case 'img':
        element = this.renderer.createElement('img');
        break;
      case 'canvas':
        element = this.renderer.createElement('canvas');
        break;
      case 'svg':
      default:
        element = this.renderer.createElement('svg', 'svg');
    }

    jsbarcode(element, barcodeValue, this.options);

    const bcElementRef = this.bcElement();
    for (const node of bcElementRef.nativeElement.childNodes) {
      this.renderer.removeChild(bcElementRef.nativeElement, node);
    }
    this.renderer.appendChild(bcElementRef.nativeElement, element);

  }

}
