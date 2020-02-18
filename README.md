# ngx-amap 
[![npm](https://img.shields.io/npm/v/ngx-amap.svg)][npm-badge-url]
[![npm](https://img.shields.io/npm/dm/ngx-amap.svg)][npm-badge-url]
[![Build Status](https://travis-ci.org/xieziyu/ngx-amap.svg?branch=master)][ci-url]

+ [在线演示](https://xieziyu.github.io/ngx-amap)
+ [模块文档](https://xieziyu.github.io/ngx-amap/api-doc)
+ [CHANGELOG](https://github.com/xieziyu/ngx-amap/blob/master/CHANGELOG.md)

ngx-amap 是为在**Angular**(ver >= 2.x)项目中便捷、高效地使用**高德地图**Javascript API而构建的组件集合

## 目录
1. [最新进度](#最新进度)
2. [安装](#安装)
3. [使用](#使用)
4. [配置](#配置)
5. [加载插件](#加载插件)
6. [加载UI库](#加载UI库)
7. [指令和服务](#指令和服务)
8. [本地演示](#本地演示)

# 最新进度
2020.02.06: v3.0.0
- NEW:
  - 支持 `AMapUI` 库，可通过 `AmapUILoaderService` 服务加载使用，部分 UI 组件也封装成了指令，如：`ui-awesome-marker`
  - 提供加载插件服务：`AmapPluginLoaderService`，部分常用插件已封装成了指令，如：`amap-tool-bar`

- BREAKING CHANGES:
  - 重写了整体的封装架构，不再使用 Promise 封装，全部使用 Observable
  - `@Output` 事件命名统一调整为: 包含`na`前缀
  - 不再提供 Getter 和 Setter 的 Wrapper，建议直接调用 `amap` 原生对象的方法
  - 移除 amap 相关的类型定义，引入 `@types/amap-js-api`

# 安装
```bash
npm install -S ngx-amap
npm install -D @types/amap-js-api
# 地图插件类型定义可按需安装：
npm install -D @types/amap-js-api-tool-bar
npm install -D @types/amap-js-api-heatmap
npm install -D @types/amap-js-api-autocomplete
npm install -D @types/amap-js-api-place-search
npm install -D @types/amap-js-api-driving
npm install -D @types/amap-js-api-transfer
# ...
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

5. 由于采用了懒加载高德 JS 库，所以如果需要直接使用全局 `AMap` 对象的方法，需要等加载完成后使用。
    - 可以在组件 `<ngx-amap>` `(naReady)` 事件之后使用 `AMap`
    - 也可以使用 `AMapLoaderService` 的 `load` 方法
    ```ts
    import { AMapLoaderService } from  'ngx-amap';

    @Component({
      ...
    })
    export class MyComponent implements OnInit {
      constructor(private loader: AMapLoaderService) {}

      ngOnInit() {
        this.loader.load().subscribe(() => {
          // 高德 JS SDK 加载完毕
          const dis = AMap.GeometryUtil.distance([123, 456], [123, 456]);
          console.log(dis: ${dis});
        })
      }
    }
    ```

更多用法和事件，请参看演示和文档。

# 配置
我们可以通过`NgxAmapModule`的`forRoot()`方法设置`ngx-amap`。它可以接受以下参数传入：
```typescript
{
  apiKey: string;   // 高德地图的开发者license key
  apiVersion?: string;  // [可选], api 版本, 默认是 '1.4.15'
  uiVersion?: string;   // [可选], ui 库版本, 默认是 '1.0.11'
  protocol?: 'http' | 'https'; // [可选], api 路径协议类型
  debug?: boolean; // [可选], 是否开启调试模式
  debugTags?: string; // [可选], 开启调试的 TAG, '*' 为全部
}
```

# 加载插件
部分常用插件如: `AMap.ToolBar` 已封装成指令，可直接使用。

插件可通过服务：`AmapPluginLoaderService` 加载后使用。若插件需要 mapObject，可配合 `ngx-amap` 的 `(naReady)` 事件一起使用。

[查看示例](https://xieziyu.github.io/ngx-amap/#/services/amap-plugin-loader)

# 加载UI库
部分常用 UI 库如: `AMapUI.SimpleMarker` 已封装成指令，可直接使用。

UI 库可通过服务：`AmapUILoaderService` 加载后使用。若 UI 需要使用 mapObject，可配合 `ngx-amap` 的 `(naReady)` 事件一起使用。

[查看示例](https://xieziyu.github.io/ngx-amap/#/services/amap-ui-loader)

# 指令和服务
| NGX-AMAP | 类型 | 高德地图 | 类 | 演示示例 |
| -------- | --- |------- | -- | -------- |
|`ngx-amap`                 | `Component` | 地图 | **AMap.Map** | [demo](https://xieziyu.github.io/ngx-amap/#/components/ngx-amap) |
|`amap-text`                | `Component` | 覆盖物：文本标记 | **AMap.Text** | [demo](https://xieziyu.github.io/ngx-amap/#/components/amap-text) |
|`amap-info-window`         | `Component` | 信息窗体 | **AMap.InfoWindow** | [demo](https://xieziyu.github.io/ngx-amap/#/components/amap-info-window) |
|`amap-marker`              | `Directive` | 覆盖物：点标记 | **AMap.Marker** | [demo](https://xieziyu.github.io/ngx-amap/#/directives/amap-marker) |
|`amap-polyline`            | `Directive` | 覆盖物：折线 | **AMap.Polyline** | [demo](https://xieziyu.github.io/ngx-amap/#/directives/amap-polyline) |
|`amap-polygon`             | `Directive` | 覆盖物：多边线 | **AMap.Polygon** | [demo](https://xieziyu.github.io/ngx-amap/#/directives/amap-polygon) |
|`amap-bezier-curve`        | `Directive` | 覆盖物：贝塞尔曲线 | **AMap.BezierCurve** | [demo](https://xieziyu.github.io/ngx-amap/#/directives/amap-bezier-curve) |
|`amap-ellipse`             | `Directive` | 覆盖物：椭圆 | **AMap.Ellipse** | [demo](https://xieziyu.github.io/ngx-amap/#/directives/amap-ellipse) |
|`amap-circle`              | `Directive` | 覆盖物：圆 | **AMap.Circle** | [demo](https://xieziyu.github.io/ngx-amap/#/directives/amap-circle) |
|`amap-circle-marker`       | `Directive` | 覆盖物：圆点标记 | **AMap.CircleMarker** | [demo](https://xieziyu.github.io/ngx-amap/#/directives/amap-circle-marker) |
|`amap-rectangle`           | `Directive` | 覆盖物：矩形 | **AMap.Rectangle** | [demo](https://xieziyu.github.io/ngx-amap/#/directives/amap-rectangle) |
|`amap-tool-bar`            | `Directive` | 工具条插件 | **AMap.ToolBar** | [demo](https://xieziyu.github.io/ngx-amap/#/plugins/amap-tool-bar) |
|`amap-marker-clusterer`    | `Directive` | 点聚合插件 | **AMap.MarkerClusterer** | [demo](https://xieziyu.github.io/ngx-amap/#/plugins/amap-marker-cluster) |
|`amap-heatmap`             | `Directive` | 图层：热力图 | **AMap.Heatmap** | [demo](https://xieziyu.github.io/ngx-amap/#/plugins/amap-heatmap) |
|`ui-simple-marker`         | `Directive` | UI 简单标记 | **AMapUI.SimpleMarker** | [demo](https://xieziyu.github.io/ngx-amap/#/ui-directives/ui-simple-marker) |
|`ui-awesome-marker`        | `Directive` | UI 字体图标标注 | **AMapUI.AwesomeMarker** | [demo](https://xieziyu.github.io/ngx-amap/#/ui-directives/ui-awesome-marker) |
|`AmapPluginLoaderService`  | `Service`   | 插件加载 | **AMap.plugin** | [demo](https://xieziyu.github.io/ngx-amap/#/services/amap-amap-plugin-loader) |
|`AmapUILoaderService`      | `Service`   | UI 库加载服务 | **AMapUI.loadUI** | [demo](https://xieziyu.github.io/ngx-amap/#/services/amap-ui-loader) |
|`AmapAutocompleteService`  | `Service`   | 关键字提示服务 | **AMap.Autocomplete** | [demo](https://xieziyu.github.io/ngx-amap/#/services/amap-autocomplete) |

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
