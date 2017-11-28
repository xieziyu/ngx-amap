import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AmapAutocompleteService, AmapAutocompleteWrapper } from 'ngx-amap';
import { CODE_TS, CODE_HTML } from './code';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  demo_md_html = CODE_HTML;
  demo_md_ts = CODE_TS;
  private _subscription: Subscription;
  private plugin: Promise<AmapAutocompleteWrapper>;
  constructor(private AmapAutocomplete: AmapAutocompleteService) { }

  ngOnInit() {
    // 使用 AmapAutocompleteService 创建 promise wrapper
    this.plugin = this.AmapAutocomplete.of({
      input: 'address'
    });

    // 绑定事件侦听：
    this.plugin.then(autocomplete => {
      this._subscription = autocomplete.on('complete').subscribe(event => console.log('Autocomplete event: "complete"', event));
      this._subscription.add(autocomplete.on('error').subscribe(event => console.log('Autocomplete event: "error"', event)));
      this._subscription.add(autocomplete.on('select').subscribe(event => console.log('Autocomplete event: "select"', event)));
      this._subscription.add(autocomplete.on('choose').subscribe(event => console.log('Autocomplete event: "choose"', event)));
    });
  }

  ngOnDestroy() {
    // 移除侦听器：
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
