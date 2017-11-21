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
  demo2_md_html = '<ngx-amap class="demo-map" [city]="myCity" [resizeEnable]="true"></ngx-amap>';
  demo3_md_html = `
  <button class="btn btn-primary" (click)="Map2.setFitView()">地图自适应显示</button>
  <hr>
  <ngx-amap #Map2 class="demo-map" name="demo2-2" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13">
    <amap-marker [position]="[116.205467, 39.907761]"></amap-marker>
    <amap-marker [position]="[116.368904, 39.913423]"></amap-marker>
    <amap-marker [position]="[116.305467, 39.807761]"></amap-marker>
  </ngx-amap>`;
  zoom = 13;

  constructor() { }

  ngOnInit() {
  }
}
