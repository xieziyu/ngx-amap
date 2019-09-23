# ngx-amap 
[![npm](https://img.shields.io/npm/v/ngx-amap.svg)][npm-badge-url]
[![npm](https://img.shields.io/npm/dm/ngx-amap.svg)][npm-badge-url]
[![Build Status](https://travis-ci.org/xieziyu/ngx-amap.svg?branch=master)][ci-url]

+ [在线演示](https://xieziyu.github.io/ngx-amap)
+ [模块文档](https://xieziyu.github.io/ngx-amap/api-doc)

ngx-amap 是为在**Angular**(ver >= 2.x)项目中便捷、高效地使用**高德地图**Javascript API而构建的组件集合

## 目录
1. [版本信息](#版本信息)
2. [最新进度](#最新进度)
3. [安装](#安装)
4. [使用](#使用)
5. [配置](#配置)
6. [指令和服务](#指令和服务)
7. [类型声明](#类型声明)
8. [本地演示](#本地演示)

# 版本信息
@npm:
+ `v2.x` for Angular >= 6
+ `v1.x` for Angular < 6

Github branches:
+ `master` for Angular >= 6
+ `v1.x` for Angular < 6


# 最新进度
2019.09.23: v2.2.1 & v1.4.1
  + 修复 Icon issue[#40](https://github.com/xieziyu/ngx-amap/issues/40)

2018.11.29: v2.2.0 & v1.4.0
  + 新增支持路径规划：
    + AMap.Driving 驾车路线规划服务：AmapDrivingService
    + AMap.TruckDriving 货车路线规划服务：AmapTruckDrivingService
    + AMap.Transfer 公交换乘路线规划服务：AmapTransferService
    + AMap.Walking 步行路线规划服务：AmapWalkingService
    + AMap.Riding 骑行路线规划服务：AmapRidingService

2018.06.22: v2.1.1 & v1.3.3
  + Bugfix：[amapAutocomplete] 切换city时不起作用 [issue#23](https://github.com/xieziyu/ngx-amap/issues/23)

2018.05.24: v2.1.0
  + 新增支持图层AMap.Heatmap指令：amap-heatmap

2018.05.11: v2.0.0: 支持 Angular 6

2018.04.17: v1.3.2：行政区查询
  + 新增支持AMap.DistrictSearch行政区查询服务：AmapDistrictSearchService (感谢: [noob9527](https://github.com/noob9527))

2018.03.27: v1.3.1：覆盖物编辑功能 ([传送门：高德开放平台API](https://lbs.amap.com/api/javascript-api/reference/plugin))
  + [demo](https://xieziyu.github.io/ngx-amap/#/amap-circle/methods) AMap.CircleEditor编辑功能：amap-circle `[editor]="true"`
  + [demo](https://xieziyu.github.io/ngx-amap/#/amap-polyline/methods) AMap.PolyEditor编辑功能：amap-polyline, amap-polygon `[editor]="true"`
  + [demo](https://xieziyu.github.io/ngx-amap/#/amap-bezier-curve/methods) AMap.BezierCurveEditor编辑功能：amap-bezier-curve `[editor]="true" [editorOptions]="editorOptions"`
  + [demo](https://xieziyu.github.io/ngx-amap/#/amap-ellipse/methods) AMap.EllipseEditor编辑功能：amap-ellipse `[editor]="true"`
  + [demo](https://xieziyu.github.io/ngx-amap/#/amap-rectangle/methods) AMap.RectangleEditor编辑功能：amap-rectangle `[editor]="true"`
  + 添加editor相关事件emitter，例如：`(editorAddnode)`, `(editorAdjust)`等，详见示例

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
  apiVersion: string;  // [可选]，默认是'1.4.11'
  urlPath: string;  // [可选]， 默认是 'https://webapi.amap.com/maps', 可以用它设置HTTPS或者HTTP协议
}
```

# 指令和服务
| NGX-AMAP | 类型 | 高德地图 | 类 | 演示示例 |
| -------- | --- |------- | -- | -------- |
|`ngx-amap`                 | `Component` | 地图 | **AMap.Map** | [demo](https://xieziyu.github.io/ngx-amap/#/ngx-amap/simple) |
|`amap-marker`              | `Directive` | 覆盖物：点标记 | **AMap.Marker** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-marker/simple) |
|`amap-text`                | `Directive` | 覆盖物：文本标记 | **AMap.Text** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-text/simple) |
|`amap-polyline`            | `Directive` | 覆盖物：折线 | **AMap.Polyline** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-polyline/simple) |
|`amap-polygon`             | `Directive` | 覆盖物：多边线 | **AMap.Polygon** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-polygon/simple) |
|`amap-bezier-curve`        | `Directive` | 覆盖物：贝塞尔曲线 | **AMap.BezierCurve** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-bezier-curve/methods) |
|`amap-ellipse`             | `Directive` | 覆盖物：椭圆 | **AMap.Ellipse** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-ellipse/methods) |
|`amap-circle`              | `Directive` | 覆盖物：圆 | **AMap.Circle** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-circle/simple) |
|`amap-circle-marker`       | `Directive` | 覆盖物：圆点标记 | **AMap.CircleMarker** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-circle-marker/simple) |
|`amap-rectangle`           | `Directive` | 覆盖物：矩形 | **AMap.Rectangle** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-rectangle/methods) |
|`amap-info-window`         | `Component` | 信息窗体 | **AMap.InfoWindow** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-info-window/simple) |
|`amap-tool-bar`            | `Directive` | 工具条插件 | **AMap.ToolBar** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-tool-bar/simple) |
|`amap-marker-clusterer`    | `Directive` | 点聚合插件 | **AMap.MarkerClusterer** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-marker-clusterer/simple) |
|`AmapGeocoderService`      | `Service`   | 地理编码服务 | **AMap.Geocoder** | [demo](https://xieziyu.github.io/ngx-amap/#/AmapGeocoderService/encode) |
|`AmapAutocompleteService`  | `Service`   | 关键字提示服务 | **AMap.Autocomplete** | [demo](https://xieziyu.github.io/ngx-amap/#/AmapAutocompleteService/search) |
|`AmapPlaceSearchService`   | `Service`   | 地点搜索服务 | **AMap.PlaceSearch** | [demo](https://xieziyu.github.io/ngx-amap/#/AmapPlaceSearchService/simple) |
|`AmapDistrictSearchService`| `Service`   | 行政区搜索服务 | **AMap.DistrictSearch** | [demo](https://xieziyu.github.io/ngx-amap/#/AmapDistrictSearchService/simple) |
|`AmapMouseToolService`     | `Service`   | 鼠标工具插件 | **AMap.MouseTool** | [demo](https://xieziyu.github.io/ngx-amap/#/AmapMouseToolService/simple) |
|`amap-heatmap`             | `Directive` | 图层：热力图 | **AMap.Heatmap** | [demo](https://xieziyu.github.io/ngx-amap/#/amap-heatmap/simple) |
|`AmapDrivingService`       | `Service`   | 驾车路线规划服务 | **AMap.Driving** | [demo](https://xieziyu.github.io/ngx-amap/#/AmapDrivingService/simple) |
|`AmapTruckDrivingService`  | `Service`   | 货车路线规划服务 | **AMap.TruckDriving** | [demo](https://xieziyu.github.io/ngx-amap/#/AmapTruckDrivingService/simple) |
|`AmapTransferService`      | `Service`   | 换乘路线规划服务 | **AMap.Transfer** | [demo](https://xieziyu.github.io/ngx-amap/#/AmapTransferService/simple) |
|`AmapWalkingService`       | `Service`   | 步行路线规划服务 | **AMap.Walking** | [demo](https://xieziyu.github.io/ngx-amap/#/AmapWalkingService/simple) |
|`AmapRidingService`        | `Service`   | 骑行路线规划服务 | **AMap.Riding** | [demo](https://xieziyu.github.io/ngx-amap/#/AmapRidingService/simple) |


# 类型声明
可以从`ngx-amap/types/class`中import对AMap类的声明：

```typescript
  import { Map, Marker, LngLat, Icon } from 'ngx-amap/types/class';
```

可以从`ngx-amap/types/interface`中import对`ngx-amap`所使用的Input类型需要的声明：

```typescript
  import { MarkerOptions, IPixel, IIcon } from 'ngx-amap/types/interface';
```

更多类型，请参看[在线文档](https://xieziyu.github.io/ngx-amap/api-doc)

# 本地演示
1. clone 当前 repo 到本地
2. 修改 `src/app/app.module.ts` 以使用自己的的高德API key
3. 启动demo，浏览器打开: `localhost:8080`
```bash
npm install
npm run demo
# or
yarn
yarn demo
```


[npm-badge-url]: https://www.npmjs.com/package/ngx-amap
[ci-url]: https://travis-ci.org/xieziyu/ngx-amap
