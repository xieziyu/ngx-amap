import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AmapMouseToolService, AmapMouseToolWrapper, NgxAmapComponent } from 'ngx-amap';
import 'rxjs/add/operator/take';
import { CODE_HTML, CODE_TS } from './code';
import { Map } from 'ngx-amap/types/class';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements AfterViewInit {
  demo_md_html = CODE_HTML;
  demo_md_ts = CODE_TS;
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

}
