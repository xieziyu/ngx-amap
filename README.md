# ngx-amap [![npm version](https://badge.fury.io/js/ngx-amap.svg)](http://badge.fury.io/js/ngx-amap) [![npm downloads](https://img.shields.io/npm/dm/ngx-amap.svg)](https://npmjs.org/ngx-amap)
angular 2+ component for AMap (高德地图). Please refer to the [ngx-amap/demo](https://xieziyu.github.io/#/ngx-amap/demo) page.

This project is ongoing ...

## Table of contents 
1. [Latest News](#latest_news)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Config](#config)
5. [Directives](#directives)
6. [Types](#types)
7. [Demo](#demo)

# Latest News
2017.09.22: Support AMap.Polyline: `amap-polyline`;

2017.09.19: Support `ngx-amap` setFitView(); some bugfix;

2017.09.13: Support AMap.InfoWindow: `amap-info-window`

2017.09.12: Support plugin AMap.ToolBar: `amap-tool-bar`

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

3. use `amap-marker` to draw markers inside the map
    + Simple example:

      + html:
      ```html
      <ngx-amap class="demo-map" [center]="[116.397428, 39.90923]">
        <amap-marker [position]="[116.397428, 39.90923]" (markerClick)="onMarkerClick($event)"></amap-marker>
      </ngx-amap>
      ```

4. add `amap-tool-bar` to add ToolBar plugin
    + Simple example:

      + html:
      ```html
      <ngx-amap class="demo-map">
        <amap-tool-bar></amap-tool-bar>
      </ngx-amap>
      ```

# Config
You can setup `NgxAmapModule` by `forRoot` method. It supports following options:
```typescript
{
  apiKey: string;   // *required*. Your developer key for AMap web service.
  apiVersion: string;  // [optional]. default is '1.3'
  urlPath: string;  // [optional]. default is 'http://webapi.amap.com/maps', You can change HTTP or HTTPS protocol by this string.
}
```

# Directives
+ `ngx-amap`: [**ngx-amap.md**](https://github.com/xieziyu/ngx-amap/blob/master/docs/ngx-amap.md)
+ `amap-marker`: [**amap-marker.md**](https://github.com/xieziyu/ngx-amap/blob/master/docs/amap-marker.md)
+ `amap-tool-bar`: [**amap-tool-bar.md**](https://github.com/xieziyu/ngx-amap/blob/master/docs/amap-tool-bar.md)
+ `amap-info-window`: [**amap-info-window.md**](https://github.com/xieziyu/ngx-amap/blob/master/docs/amap-info-window.md)
+ `amap-polyline`: [**amap-polyline.md**](https://github.com/xieziyu/ngx-amap/blob/master/docs/amap-polyline.md)

# Types
Exported some useful type interfaces such as `Icon`, `Pixel`, etc. Please refer to [**Types.md**](https://github.com/xieziyu/ngx-amap/blob/master/docs/Types.md).

# Demo
1. clone this repo to your working copy
2. modify `src/app/views/shared/shared.module.ts` to use your own KEY for ngx-amap
3. launch the demo page in your local machine:
```
npm install
npm run demo
```