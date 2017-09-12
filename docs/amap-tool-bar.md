# Directive: `<amap-tool-bar></amap-tool-bar>`

## Table of contents 
1. [Usage](#usage)
2. [Input](#input)
3. [Event](#event)

# Usage
amap-tool-bar is a directive to add `AMap.ToolBar` plugin in `ngx-amap` container. Use it inside `<ngx-amap></ngx-amap>`

  + html
  ```html
  <ngx-amap class="demo-map">
    <amap-tool-bar></amap-tool-bar>
  </ngx-amap>
  ```

# Input
+ It accepts the `ToolbarOptions` as the `@Input()` attributes, check `ToolbarOptions` in [**Types.md**](https://github.com/xieziyu/ngx-amap/blob/master/docs/Types.md)
  + `offset`: PixelOptions; *[Optional/可选参数] [Variable/可变参数]*
  + `position`: string; *[Optional]*
  + `ruler`: boolean; *[Optional] [Variable]*
  + `noIpLocate`: boolean; *[Optional]*
  + `locate`: boolean; *[Optional] [Variable]*
  + `liteStyle`: boolean; *[Optional]*
  + `direction`: boolean; *[Optional] [Variable]*
  + `autoPosition`: boolean; *[Optional]*
  + `locationMarker`: Marker; *[Optional]*
  + `useNative`: boolean; *[Optional]*

  ```html
  <amap-tool-bar [ruler]="showRuler" [direction]="showDirection"></amap-tool-bar>
  ```

+ It also support extra attributes:
  + `hidden`: boolean, use it to hide/show the marker.
  ```html
  <amap-tool-bar [hidden]="pluginHidden"></amap-tool-bar>
  ```

# Event
Please refer to [doc: AMap.ToolBar](http://lbs.amap.com/api/javascript-api/reference/map-control)
+ `zoomChanged`: emit `'zoomchanged'` event of `AMap.ToolBar`. 
+ `location`: emit `'location'` event of `AMap.ToolBar`.

  + html
  ```html
  <amap-tool-bar (zoomChanged)="onZoomChanged($event)"></amap-tool-bar>
  ```

  + component
  ```typescript
  onZoomChanged(event) {
    console.log('on zoom changed:', event);
  }
  ```