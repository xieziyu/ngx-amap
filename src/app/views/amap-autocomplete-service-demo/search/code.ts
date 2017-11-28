export const CODE_TS = `\
import { Component, OnInit } from '@angular/core';
import { AmapAutocompleteService, AmapAutocompleteWrapper } from 'ngx-amap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private plugin: Promise<AmapAutocompleteWrapper>;

  constructor(private AmapAutocomplete: AmapAutocompleteService) {
  }

  ngOnInit() {
    // 使用 AmapAutocompleteService 创建 promise wrapper
    this.plugin = this.AmapAutocomplete.of({
      input: 'address'
    });
  }

}`;

export const CODE_HTML = `\
<form class="form-inline">
  <div class="form-group">
    <input type="text" class="form-control" id="address" placeholder="请输入关键字...">
  </div>
</form>
`;
