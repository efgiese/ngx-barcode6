# ngx-barcode6

An angular component for Angular 6 for creating 1-D barcodes based on [Lindell's JsBarcode](https://github.com/lindell/JsBarcode).

This is forked from [yobryon/ngx-barcode](https://github.com/yobryon/ngx-barcode) and upgraded to Angular 6.

## Features

- supports all barcode formats provided by JsBarcode

  - CODE128
  - EAN
  - CODE39
  - ITF-14
  - MSI
  - Pharmacode
  - Codabar

## Installation

To use ngx-barcode6 in your project, install it via npm:

```bash
npm install --save ngx-barcode6 jsbarcode
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
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxBarcode6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
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
    bc-format="CODE39"
    bc-value="Angular 6+"
    bc-display-value="true"
  >
  </ngx-barcode6>
</div>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
npm run build ngx-barcode6
```

## License

MIT © [Bryon Williams](mailto:bryon.williams@live.com), [Edgar Giese](mailto:edgar@egiese.de)
