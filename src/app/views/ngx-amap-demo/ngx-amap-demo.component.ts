import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-amap-demo',
  templateUrl: './ngx-amap-demo.component.html',
  styleUrls: ['./ngx-amap-demo.component.scss']
})
export class NgxAmapDemoComponent implements OnInit {
  myCityName: string;
  myCity: string;
  demo1_md_html = '<ngx-amap class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13"></ngx-amap>';
  zoom = 13;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.zoom++;
  }
}
