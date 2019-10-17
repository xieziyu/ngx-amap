import { Component, OnInit } from '@angular/core';
import { AmapAutocompleteService, AmapAutocompleteWrapper } from 'ngx-amap';

declare const require: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  demo_md_html = require('!!html-loader!./search.component.html');
  demo_md_ts = require('!!raw-loader!./search.component.ts');
  private plugin: Promise<AmapAutocompleteWrapper>;

  constructor(private AmapAutocomplete: AmapAutocompleteService) {}

  ngOnInit() {
    // 使用 AmapAutocompleteService 创建 promise wrapper
    this.plugin = this.AmapAutocomplete.of({
      input: 'address',
    });
  }
}
