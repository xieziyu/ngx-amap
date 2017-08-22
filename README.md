# ngx-amap [![npm version](https://badge.fury.io/js/ngx-amap.svg)](http://badge.fury.io/js/ngx-amap) [![npm downloads](https://img.shields.io/npm/dm/ngx-amap.svg)](https://npmjs.org/ngx-amap)
angular 2+ component for AMap (高德地图). This project is ongoing ...

## Table of contents 
1. [Installation](#installation)
2. [Usage](#usage)
3. [Components](#components)
4. [Events](#events)
5. [Demo](#demo)

# Installation
```
npm install ngx-amap --save
```

# Usage
1. import `NgxAmapModule` in your app module (or any other proper angular module).
    + app.module:
      ```typescript
      import { NgxAmapModule } from 'ngx-amap';

      @NgModule({
        imports: [
          ...,
          NgxAmapModule.forRoot({
            apiKey: '你申请的key'
          })
        ],
        ...
      })
      export class AppModule { }
      ```

2. use `ngx-amap` component with **pre-defined height**.
    + Simple example:

      + html:
      ```html
      <ngx-amap class="demo-map"></ngx-amap>
      ```

      + css:
      ```css
      .demo-map {
        height: 400px;
      }
      ```

# Components
## `ngx-amap`
AMap container. Use it with **pre-defined height**. 

It accepts the [MapOptions](http://lbs.amap.com/api/javascript-api/reference/map) as the `@Input()` attributes:
+ `view`
+ `layers`
+ `zoom`
+ `center`
+ `labelzIndex`
+ `zooms`
+ `lang`
+ `cursor`
+ `crs`
+ `animateEnable`
+ `isHotspot`
+ `defaultLayer`
+ `rotateEnable`
+ `resizeEnable`
+ `showIndoorMap`
+ `indoorMap`
+ `expandZoomRange`
+ `dragEnable`
+ `zoomEnable`
+ `doubleClickZoom`
+ `keyboardEnable`
+ `jogEnable`
+ `scrollWheel`
+ `touchZoom`
+ `mapStyle`
+ `features`
+ `showBuildingBlock`
```html
<ngx-amap class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13"></ngx-amap>
```

It also support extra attributes:
+ `city`: string
```html 
<ngx-amap class="demo-map" [city]="myCity"></ngx-amap>
```

# Events
+ `mapReady`: Emitted when AMap.Map is created.

  + html
  ```html
  <ngx-amap class="demo-map" (mapReady)="onMapReady($event)"></ngx-amap>
  ```

  + component
  ```typescript
  onMapReady(mapInstance: Promise<any>) {
    mapInstance.then(map => {
      console.log(map);
    });
  }
  ```
# Demo
1. clone this repo to your working copy
2. modify `demo/src/app/app.module.ts` to use your own KEY for ngx-amap
3. launch the demo page in your local machine:
```
npm install
npm run demo
```