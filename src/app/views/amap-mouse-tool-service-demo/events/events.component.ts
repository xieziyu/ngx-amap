import { Component, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AmapMouseToolService, AmapMouseToolWrapper, NgxAmapComponent } from 'ngx-amap';
import { Map } from 'ngx-amap/types/class';

declare const require: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements AfterViewInit, OnDestroy {
  demo_md_html = require('!!html-loader!./events.component.html');
  demo_md_ts = require('!!raw-loader!./events.component.ts');

  private _subscription: Subscription;
  private plugin: Promise<AmapMouseToolWrapper>;

  @ViewChild(NgxAmapComponent, { static: true })
  private mapComponent: NgxAmapComponent;

  constructor(private mouseToolService: AmapMouseToolService) {}

  ngAfterViewInit() {
    this.plugin = this.mapComponent.ready
      .pipe(take(1))
      .toPromise()
      .then((map: Map) => this.mouseToolService.of(map));

    // 绑定事件侦听：
    this.plugin.then(mouseTool => {
      this._subscription = mouseTool
        .on('draw')
        .subscribe(event => console.log('MouseTool event: "draw"', event));
    });
  }

  async draw(type: string) {
    const wrapper = await this.plugin;
    await wrapper[type]();
  }

  ngOnDestroy() {
    // 移除侦听器：
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
