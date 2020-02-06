import { Component } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-autocomplete-simple',
  templateUrl: './demo-amap-autocomplete-simple.component.html',
  styleUrls: ['./demo-amap-autocomplete-simple.component.scss'],
})
export class DemoAmapAutocompleteSimpleComponent {
  html = require('!!html-loader!./demo-amap-autocomplete-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-autocomplete-simple.component.ts').default; // DEMO IGNORE
  myCity = '';

  onEvent(event: any, type: string) {
    console.log('autocomplete event:', type, event);
  }
}
