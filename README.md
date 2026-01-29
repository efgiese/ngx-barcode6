# Demo Application for ngx-barcode6

An angular component for Angular 17 - 21 for creating 1-D barcodes based on [Lindell's JsBarcode](https://github.com/lindell/JsBarcode).

This is forked from [yobryon/ngx-barcode](https://github.com/yobryon/ngx-barcode) and upgraded to Angular 6 works on Angular 21.x.

Published on [npm](https://www.npmjs.com/package/ngx-barcode6).

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
npm install --save ngx-barcode6 jsbarcode@3.12.1
```

For Angular 8 use `ngx-barcode6@1.0.10`.

```bash
npm install --save ngx-barcode6@1.0.10 jsbarcode@3.11.5
```

For Angular 10 try `ngx-barcode6@1.0.12`.

Because of Angular 16 and Nodejs 18 i think you can not use this actual version for lower than Angular 15.

For this Project, i installed the dependencies (jsbarcode) via npm manually:

```bash
npm install --save jsbarcode@3
```

From now on, I'm changing the release naming. The second digit in the version indicates the Angular version.

## Usage

Since Angular 19 standalone: true is standard:

```typescript
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxBarcode6 } from 'ngx-barcode6';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, NgxBarcode6],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  ...
}
```

Once the library is imported, you can use the ngx-barcode6 component in your Angular application:

```xml
<div style="text-align: center">
  <ngx-barcode6
    [bc-format]="selectedBarcodeObj().value"
    [bc-width]="selectedWidth()"
    [bc-height]="selectedHeight()"
    [bc-font-size]="selectedFontSize()"
    [bc-value]="selectedBarcodeObj().example"
    [bc-display-value]="true"
  >
  </ngx-barcode6>
</div>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
npm run build ngx-barcode6 --omit=dev
```

To test the deploy:

```bash
cd dist/ngx-barcode6
npm publish --dry-run
```

To deploy ngx-barcode6:

```bash
cd dist/ngx-barcode6
npm publish
```

## Test

To test the demo:

```bash
ng test
```

To test the ngx-barcode6:

```bash
ng test ngx-barcode6
```

## License

MIT © [Bryon Williams](mailto:bryon.williams@live.com), [Edgar Giese](mailto:edgar@egiese.de)
