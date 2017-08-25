# Directive: `<amap-marker></amap-marker>`

## Table of contents 
1. [Usage](#usage)
2. [Input](#input)
3. [Event](#event)

# Usage
amap-marker is a directive to draw `AMap.Marker` in `ngx-amap` container. Use it inside `<ngx-amap></ngx-amap>`

  + html
  ```html
  <ngx-amap class="demo-map">
    <amap-marker [position]="[116.397428, 39.90923]"></amap-marker>
  </ngx-amap>
  ```

# Input
+ It accepts the `MarkerOptions` as the `@Input()` attributes, check `MarkerOptions` in [**Types.md**](https://github.com/xieziyu/ngx-amap/blob/master/docs/Types.md)
  + `position`: number[];
  + `offset`: PixelOptions;
  + `icon`: string|IconOptions;
  + `content`: any;
  + `topWhenClick`: boolean;
  + `bubble`: boolean;
  + `draggable`: boolean;
  + `raiseOnDrag`: boolean;
  + `cursor`: string;
  + `visible`: boolean;
  + `zIndex`: number;
  + `angle`: number;
  + `autoRotation`: boolean;
  + `shadow`: IconOptions;
  + `title`: string;
  + `clickable`: boolean;
  + `shape`: any;
  + `extData`: any;
  + `label`: LabelOptions;
  ```html
  <amap-marker [position]="[116.397428, 39.90923]" [icon]="customIcon" [label]="customLabel"></amap-marker>
  ```

+ It also support extra attributes:
  + `hidden`: boolean, use it to hide/show the marker.
  ```html
  <ngx-amap class="demo-map" [hidden]="markerHidden"></ngx-amap>
  ```

# Event
+ `markerClick`: emit a `MapsEvent` when marker is clicked. Please refer to [doc: MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event)

  + html
  ```html
  <amap-marker [position]="[116.397428, 39.90923]" (markerClick)="onMarkerClick($event)"></amap-marker>
  ```

  + component
  ```typescript
  onMarkerClick(event) {
    console.log('on marker click:', event);
  }
  ```