import { Component, Input, OnChanges, ViewChild, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

import jsbarcode from 'jsbarcode';

@Component({
  standalone: false,
  selector: 'ngx-barcode6',
  template: `<div #bcElement [class]="cssClass"></div>`,
  styles: []
})
export class NgxBarcode6Component implements OnChanges, AfterViewInit {

  @Input('bc-element-type') elementType: 'svg' | 'img' | 'canvas' = 'svg';
  @Input('bc-class') cssClass = 'barcode'; // this should be done more elegantly

  @Input('bc-format') format: string | '' | 'CODE128' | 'CODE128A' | 'CODE128B' | 'CODE128C' | 'EAN13' | 'UPC' | 'EAN8' | 'EAN5' |
    'EAN2' | 'CODE39' | 'ITF' | 'ITF14' | 'MSI' | 'MSI10' | 'MSI11' | 'MSI1010' | 'MSI1110' | 'pharmacode' | 'codabar' = 'CODE128';
  @Input('bc-line-color') lineColor = '#000000';
  @Input('bc-width') width = 2;
  @Input('bc-height') height = 100;
  @Input('bc-display-value') displayValue = false;
  @Input('bc-font-options') fontOptions = '';
  @Input('bc-font') font = 'monospace';
  @Input('bc-text-align') textAlign = 'center';
  @Input('bc-text-position') textPosition = 'bottom';
  @Input('bc-text-margin') textMargin = 2;
  @Input('bc-font-size') fontSize = 20;
  @Input('bc-background') background = '#ffffff';
  @Input('bc-margin') margin = 10;
  @Input('bc-margin-top') marginTop = 10;
  @Input('bc-margin-bottom') marginBottom = 10;
  @Input('bc-margin-left') marginLeft = 10;
  @Input('bc-margin-right') marginRight = 10;
  @Input('bc-value') value = '';
  @Input('bc-valid') valid: () => boolean = () => true;
  @ViewChild('bcElement') bcElement!: ElementRef


  get options(): any {
    return {
      format: this.format,
      lineColor: this.lineColor,
      width: this.width,
      height: this.height,
      displayValue: this.displayValue,
      fontOptions: this.fontOptions,
      font: this.font,
      textAlign: this.textAlign,
      textPosition: this.textPosition,
      textMargin: this.textMargin,
      fontSize: this.fontSize,
      background: this.background,
      margin: this.margin,
      marginTop: this.marginTop,
      marginBottom: this.marginBottom,
      marginLeft: this.marginLeft,
      marginRight: this.marginRight,
      valid: this.valid,
    };
  }

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.createBarcode();
  }

  ngOnChanges(): void {
    if (this.bcElement) {
      this.createBarcode();
    }

  }

  createBarcode(): void {
    if (!this.value) { return; }
    let element: Element;
    switch (this.elementType) {
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

    jsbarcode(element, this.value, this.options);

    for (const node of this.bcElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.bcElement.nativeElement, node);
    }
    this.renderer.appendChild(this.bcElement.nativeElement, element);

  }

}
