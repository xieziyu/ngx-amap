import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AmapAutocompleteService, AmapAutocompleteWrapper } from 'ngx-amap';

declare const require: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit, OnDestroy {
  demo_md_html = require('!!html-loader!./events.component.html');
  demo_md_ts = require('!!raw-loader!./events.component.ts');
  private _subscription: Subscription;
  private plugin: Promise<AmapAutocompleteWrapper>;
  constructor(private AmapAutocomplete: AmapAutocompleteService) {}

  ngOnInit() {
    // 使用 AmapAutocompleteService 创建 promise wrapper
    this.plugin = this.AmapAutocomplete.of({
      input: 'address',
    });

    // 绑定事件侦听：
    this.plugin.then(autocomplete => {
      this._subscription = autocomplete
        .on('complete')
        .subscribe(event => console.log('Autocomplete event: "complete"', event));
      this._subscription.add(
        autocomplete
          .on('error')
          .subscribe(event => console.log('Autocomplete event: "error"', event)),
      );
      this._subscription.add(
        autocomplete
          .on('select')
          .subscribe(event => console.log('Autocomplete event: "select"', event)),
      );
      this._subscription.add(
        autocomplete
          .on('choose')
          .subscribe(event => console.log('Autocomplete event: "choose"', event)),
      );
    });
  }

  ngOnDestroy() {
    // 移除侦听器：
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
