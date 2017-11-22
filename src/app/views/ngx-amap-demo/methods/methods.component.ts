import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  demo_md_html = `\
<button class="btn btn-outline-primary" (click)="map.setFitView()">地图自适应显示</button>
<hr>
<ngx-amap #map class="demo-map" name="demo" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-marker [position]="[116.205467, 39.907761]"></amap-marker>
  <amap-marker [position]="[116.368904, 39.913423]"></amap-marker>
  <amap-marker [position]="[116.305467, 39.807761]"></amap-marker>
</ngx-amap>`;

constructor() { }

  ngOnInit() {
  }

}
