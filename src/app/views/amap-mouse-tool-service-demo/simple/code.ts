export const CODE_TS = `\
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AmapMouseToolService, AmapMouseToolWrapper, NgxAmapComponent } from 'ngx-amap';
import 'rxjs/add/operator/take';
import { Map } from 'ngx-amap/types/class';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements AfterViewInit {
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
  }

  draw(type: string) {
    this.plugin
      .then(wrapper => {
        return wrapper[type]();
      })
      .then(res => {
        console.log(res);
      });
  }

  clear() {
    this.plugin
      .then(wrapper => {
        return wrapper.close(true);
      });
  }
}`;

export const CODE_HTML = `\
<div class="card card-accent-info">
  <div class="card-header">
    鼠标工具
  </div>
  <div class="card-body">
    <button class="btn btn-outline-primary" (click)="draw('marker')">点标记</button>
    <button class="btn btn-outline-primary" (click)="draw('circle')">圆</button>
    <button class="btn btn-outline-primary" (click)="draw('rectangle')">矩形</button>
    <button class="btn btn-outline-primary" (click)="draw('polygon')">多边形</button>
    <button class="btn btn-outline-primary" (click)="clear()">清除</button>
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
