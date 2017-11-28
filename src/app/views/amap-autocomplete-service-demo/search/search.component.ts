import { Component, OnInit } from '@angular/core';
import { AmapAutocompleteService, AmapAutocompleteWrapper } from 'ngx-amap';
import { CODE_TS, CODE_HTML } from './code';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  demo_md_html = CODE_HTML;
  demo_md_ts = CODE_TS;
  private plugin: Promise<AmapAutocompleteWrapper>;

  constructor(private AmapAutocomplete: AmapAutocompleteService) {
  }

  ngOnInit() {
    // 使用 AmapAutocompleteService 创建 promise wrapper
    this.plugin = this.AmapAutocomplete.of({
      input: 'address'
    });
  }

}
