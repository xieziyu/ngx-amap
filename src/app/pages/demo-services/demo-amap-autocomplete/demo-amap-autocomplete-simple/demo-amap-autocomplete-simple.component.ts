import { Component, OnInit, OnDestroy } from '@angular/core';
import { AmapAutocompleteService } from 'ngx-amap';
import { Subscription } from 'rxjs';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-autocomplete-simple',
  templateUrl: './demo-amap-autocomplete-simple.component.html',
  styleUrls: ['./demo-amap-autocomplete-simple.component.scss'],
})
export class DemoAmapAutocompleteSimpleComponent implements OnInit, OnDestroy {
  html = require('!!html-loader!./demo-amap-autocomplete-simple.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-autocomplete-simple.component.ts').default; // DEMO IGNORE
  private plugin: AMap.Autocomplete;
  private subscriptions = new Subscription();

  constructor(private autocomplete: AmapAutocompleteService) {}

  ngOnInit() {
    // 创建插件：
    this.autocomplete.create({ input: 'address' }).subscribe(plugin => {
      this.plugin = plugin;
    });

    // 绑定事件：
    this.subscriptions.add(
      this.autocomplete
        .on('complete')
        .subscribe(event => console.log('Autocomplete event: "complete"', event)),
    );
    this.subscriptions.add(
      this.autocomplete
        .on('select')
        .subscribe(event => console.log('Autocomplete event: "select"', event)),
    );
  }

  ngOnDestroy() {
    // 移除事件侦听：
    this.subscriptions.unsubscribe();
  }
}
