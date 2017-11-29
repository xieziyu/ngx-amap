# ngx-amap 
[![npm version](https://badge.fury.io/js/ngx-amap.svg)](https://badge.fury.io/js/ngx-amap)
[![npm downloads](https://img.shields.io/npm/dm/ngx-amap.svg)](https://npmjs.org/ngx-amap)
[![Build Status](https://travis-ci.org/xieziyu/ngx-amap.svg?branch=master)](https://travis-ci.org/xieziyu/ngx-amap)

+ [在线演示](https://xieziyu.github.io/ngx-amap)
+ [模块文档](https://xieziyu.github.io/ngx-amap/api-doc)

ngx-amap 是为在**Angular**(ver >= 2.x)项目中便捷、高效地使用**高德地图**Javascript API而构建的组件集合

## 目录
1. [最新进度](#最新进度)
2. [安装](#安装)
3. [使用](#使用)
4. [配置](#配置)
5. [指令](#指令)
6. [类型声明](#类型声明)
7. [演示示例](#演示示例)

# 最新进度
2017.11.29: v1.0.1
  + 修复 input[Autocomplete] 指令事件错误的问题

2017.11.29: v1.0.0
  + 新增支持AMap.PlaceSearch的搜索服务：AmapPlaceSearchService

2017.11.28: v1.0.0-beta.4
  + 新增支持AMap.Geocoder的地理服务：AmapGeocoderService
  + 新增支持AMap.Autocomplete的搜索服务和指令：AmapAutocompleteService, AmapAutocompleteDirective
  + 逻辑变更：marker在没有position的时候不再绘制于默认位置
  + 逻辑变更：info-window现在会跟随它的hostMarker改变位置

2017.11.24: 新增支持AMap.MakerClusterer点聚合：amap-marker-clusterer

2017.11.23: 重写了各个组件，尽可能齐全地为每个组件提供了public方法和output事件，以适配高德原生API

# 安装
```bash
$ npm install ngx-amap --save
# or
$ yarn add ngx-amap
```

# 使用
1. import `NgxAmapModule`
    + Example:
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

2. 使用 `ngx-amap` 组件时必须**给定高度**.
    + 简单示例:

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

3. 可以配合使用其他指令和组件。例如 `amap-marker` 可以在地图中画覆盖物：点标记。
    + 简单示例:

      + html:
      ```html
      <ngx-amap class="demo-map" [center]="[116.397428, 39.90923]">
        <amap-marker [position]="[116.397428, 39.90923]" (markerClick)="onMarkerClick($event)"></amap-marker>
      </ngx-amap>
      ```

4. 加入地图控件的方法也很简单，例如：`amap-tool-bar`
    + 简单示例:

      + html:
      ```html
      <ngx-amap class="demo-map">
        <amap-tool-bar></amap-tool-bar>
      </ngx-amap>
      ```

更多用法和事件，请参看演示和文档。

# 配置
你可以通过`NgxAmapModule`的`forRoot()`方法设置`ngx-amap`. 它可以接受以下参数传入：
```typescript
{
  apiKey: string;   // *必须， 高德地图的开发者license key
  apiVersion: string;  // [可选]，默认是'1.4.1'
  urlPath: string;  // [可选]， 默认是 'http://webapi.amap.com/maps', 可以用它设置HTTPS或者HTTP协议
}
```

# 指令
+ `ngx-amap`: 组件：地图容器
+ `amap-marker`: 指令：点标记
+ `amap-polyline`: 指令：折线
+ `amap-tool-bar`: 指令：地图控件
+ `amap-info-window`: 组件：信息窗体
+ `amap-marker-clusterer`: 指令：点聚合
+ `AmapGeocoderService`: 服务：地理编码
+ `AmapAutocompleteService`: 服务：搜索服务，输入提示
+ `input [amapAutocomplete]`: 指令：input扩展，搜索服务的输入提示
+ `AmapPlaceSearchService`: 服务：搜索服务，地点关键字搜索


# 类型声明
可以从`ngx-amap/types/class`中import对AMap类的声明：

```typescript
  import { Map, Marker, LngLat, Icon } from 'ngx-amap/types/class';
```

可以从`ngx-amap/types/interface`中import对`ngx-amap`所使用的Input类型需要的声明：

```typescript
  import { MarkerOptions, IPixel, IIcon } from 'ngx-amap/types/class';
```

更多类型，请参看[在线文档](https://xieziyu.github.io/ngx-amap/api-doc)

# 演示示例
1. clone 当前 repo 到本地
2. 修改 `src/app/app.module.ts` 以使用自己的的高德API key
3. 启动demo，浏览器打开: `localhost:8080`
```bash
npm install
npm run demo
# or
yarn install
yarn demo
```