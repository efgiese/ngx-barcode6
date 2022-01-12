# ngx-barcode6

An angular component for Angular 9 - 13 for creating 1-D barcodes based on [Lindell's JsBarcode](https://github.com/lindell/JsBarcode).

This is forked from [yobryon/ngx-barcode](https://github.com/yobryon/ngx-barcode) and upgraded to Angular 6 works on Angular 13.x.

## Supported barcodes

Supports all barcode formats provided by [JsBarcode](https://github.com/lindell/JsBarcode/wiki)

- CODE128
  - CODE128 (automatic mode switching)
  - CODE128 A/B/C (force mode)
- EAN / UPC
  - EAN13
  - UPC
  - EAN8
  - EAN5
  - EAN2
- CODE39
- ITF
  - ITF
  - ITF-14
- MSI
  - MSI10
  - MSI11
  - MSI1010
  - MSI1110
- Pharmacode
- Codabar

## Installation

To use ngx-barcode6 in your project, install it via npm:

```bash
npm install --save ngx-barcode6 jsbarcode@3.11.5
```

For Angular 8 use `ngx-barcode6@1.0.10`.

```bash
npm install --save ngx-barcode6@1.0.10 jsbarcode@3.11.5
```

## Usage

Import the NgxBarcode6Module into your desired module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import ngx-barcode module
import { NgxBarcode6Module } from 'ngx-barcode6';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxBarcode6Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Once the library is imported, you can use the ngx-barcode6 component in your Angular application:

```xml
<!-- Adding a barcode in app.component.html -->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
</div>
<div style="text-align:center">
  <ngx-barcode6
    [bc-format]="'MSI'"
    [bc-value]="'12345678901231'"
    [bc-display-value]="true"
  >
  </ngx-barcode6>
</div>
```

## License

MIT © [Bryon Williams](mailto:bryon.williams@live.com), [Edgar Giese](mailto:edgar@egiese.de)
