# Directive: `<amap-polyline></amap-polyline>`

## Table of contents 
1. [Usage](#usage)
2. [Input](#input)
3. [Event](#event)
4. [Method](#method)

# Usage
amap-polyline is a directive to draw `AMap.Polyline` in `ngx-amap` container. Use it inside `<ngx-amap></ngx-amap>`

  + html
  ```html
  <ngx-amap class="demo-map">
    <amap-polyline></amap-polyline>
  </ngx-amap>
  ```

# Input
+ It accepts the `PolylineOptions` as the `@Input()` attributes, check `PolylineOptions` in [**Types.md**](https://github.com/xieziyu/ngx-amap/blob/master/docs/Types.md)
  + `zIndex`: number; *[Optional/可选参数]*
  + `bubble`: boolean; *[Optional]*
  + `geodesic`: boolean; *[Optional]*
  + `isOutline`: boolean; *[Optional]*
  + `borderWeight`: number; *[Optional]*
  + `outlineColor`: string; *[Optional]*
  + `path`: number[][]; *[Optional] [Variable/可变参数]*
  + `strokeColor`: string; *[Optional]*
  + `strokeOpacity`: number; *[Optional]*
  + `strokeWeight`: number; *[Optional]*
  + `strokeStyle`: string; *[Optional]*
  + `strokeDasharray`: number[]; *[Optional]*
  + `lineJoin`: string; *[Optional]*
  + `extData`: any; *[Optional] [Variable]*
  + `showDir`: boolean;  *[Optional]*
  + `options`: PolylineOptions; *[Optional] [Variable]* **Notice: it will override other properties**

  ```html
  <amap-polyline
    [path]="lineArr"
    [strokeColor]="'#3366FF'"
    [strokeOpacity]="1"
    [strokeWeight]="5"
    [strokeStyle]="'solid'"
    [strokeDasharray]="[10, 5]">
  </amap-polyline>
  ```

  ```javascript
  lineArr = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.904600]
  ];
  ```

+ It also support extra attributes:
  + `hidden`: boolean, default is `false`. Use it to hide/show the polyline.
  ```html
  <amap-polyline [path]="lineArr" [hidden]="polylineHidden"></amap-polyline>
  ```

# Event
+ `polylineClick`: emit a `MapsEvent` when polyline is clicked. Please refer to [doc: MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event)

  + html
  ```html
  <amap-polyline [path]="lineArr" (polylineClick)="onPolylineClick($event)"></amap-polyline>
  ```

  + component
  ```typescript
  onPolylineClick(event) {
    console.log('on polyline click:', event);
  }
  ```

# Method
+ `getPath()`: Promise\<number[][]>
+ `getOptions()`: Promise\<PolylineOptions>
+ `getLength()`: Promise\<number>
+ `getBounds()`: Promise\<any>
+ `getExtData()`: Promise\<any>

  + component
  ```typescript
  import { AmapPolylineDirective } from 'ngx-amap';

  @ViewChild(AmapPolylineDirective)
  polyline: AmapPolylineDirective;

  demo() {
    this.polyline.getPath().then(path => { console.log('get path:', path)});
    this.polyline.getOptions().then(options => { console.log('get options:', options)});
    this.polyline.getLength().then(length => { console.log('get length:', length)});
    this.polyline.getBounds().then(bounds => { console.log('get bounds:', bounds)});
    this.polyline.getExtData().then(extData => { console.log('get extData:', extData)});
  }
  ```