import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AmapMouseToolService, AmapMouseToolWrapper, NgxAmapComponent } from 'ngx-amap';
import { take } from 'rxjs/operators';
import { Map } from 'ngx-amap/types/class';

declare const require: any;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
})
export class SimpleComponent implements AfterViewInit {
  demo_md_html = require('!!html-loader!./simple.component.html');
  demo_md_ts = require('!!raw-loader!./simple.component.ts');

  private plugin: Promise<AmapMouseToolWrapper>;

  @ViewChild(NgxAmapComponent, { static: true })
  private mapComponent: NgxAmapComponent;

  constructor(private mouseToolService: AmapMouseToolService) {}

  ngAfterViewInit() {
    this.plugin = this.mapComponent.ready
      .pipe(take(1))
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
    this.plugin.then(wrapper => {
      return wrapper.close(true);
    });
  }
}
