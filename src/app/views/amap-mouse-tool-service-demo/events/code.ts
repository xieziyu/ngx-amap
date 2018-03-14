export const CODE_TS = `\
import { Component, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AmapMouseToolService, AmapMouseToolWrapper, NgxAmapComponent } from 'ngx-amap';
import { Map } from 'ngx-amap/types/class';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements AfterViewInit, OnDestroy {
  private _subscription: Subscription;

  private plugin: Promise<AmapMouseToolWrapper>;

  @ViewChild(NgxAmapComponent)
  private mapComponent: NgxAmapComponent;

  constructor(
    private mouseToolService: AmapMouseToolService
  ) {
  }

  ngAfterViewInit() {
    this.plugin = this.mapComponent.ready
      .take(1)
      .toPromise()
      .then((map: Map) => this.mouseToolService.of(map));

    // 绑定事件侦听：
    this.plugin.then(mouseTool => {
      this._subscription = mouseTool.on('draw')
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
}`;

export const CODE_HTML = `\
<div class="card card-accent-info">
  <div class="card-header">
    事件
  </div>
  <div class="card-body">
    <button class="btn btn-outline-primary" (click)="draw('marker')">点标记</button>
    <button class="btn btn-outline-primary" (click)="draw('circle')">圆</button>
    <button class="btn btn-outline-primary" (click)="draw('rectangle')">矩形</button>
    <button class="btn btn-outline-primary" (click)="draw('polygon')">多边形</button>
    <div class="alert alert-info mt-3">请查看console输出</div>
    <hr>
    <ngx-amap
      class="demo-map"
      [resizeEnable]="true"
      [zoom]="13"
    >
    </ngx-amap>
  </div>
</div>
`;
