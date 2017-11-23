import { Component, OnInit } from '@angular/core';
import { AmapInfoWindowComponent } from 'ngx-amap';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  demo_md_html = `\
<button type="button" class="btn btn-outline-primary" (click)="getMethods(infoWindow)">调用Getter方法</button>
<hr>
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]">
  <amap-info-window #infoWindow [isOpen]="true" [position]="[116.397428, 39.90923]">
    我还是一个简单的信息窗体
  </amap-info-window>
</ngx-amap>
`;
  demo_md_ts = `\
import { Component, OnInit } from '@angular/core';
import { AmapInfoWindowComponent } from 'ngx-amap';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  getMethods(infoWindow: AmapInfoWindowComponent) {
    if (infoWindow) {
      infoWindow.getIsOpen().then(v => console.log('getIsOpen():', v));
      infoWindow.getContent().then(v => console.log('getContent():', v));
      infoWindow.getPosition().then(v => console.log('getPosition():', v));
      infoWindow.getSize().then(v => console.log('getSize():', v));
    }
  }
}
`;

  constructor() { }

  ngOnInit() {
  }

  getMethods(infoWindow: AmapInfoWindowComponent) {
    if (infoWindow) {
      infoWindow.getIsOpen().then(v => console.log('getIsOpen():', v));
      infoWindow.getContent().then(v => console.log('getContent():', v));
      infoWindow.getPosition().then(v => console.log('getPosition():', v));
      infoWindow.getSize().then(v => console.log('getSize():', v));
    }
  }
}
