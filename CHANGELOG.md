## 3.0.5 (2020-04-07)

#### Bugfix:

- [issue#65](https://github.com/xieziyu/ngx-amap/issues/65) support `gridMapForeign` and `vectorMapForeign`

## 3.0.3 (2020-03-12)

#### Bugfix:

- [issue#63](https://github.com/xieziyu/ngx-amap/issues/63) AMap has no exported member XXX
- [issue#58](https://github.com/xieziyu/ngx-amap/issues/58) No provider for InjectionToken NGX_AMAP_CONFIG

## 3.0.2 (2020-02-18)

#### Bugfix:

- `AmapUILoaderService`: 确保 UI 库在 main-async.js 加载完毕后才进行加载

## 3.0.1 (2020-02-13)

#### Patch:

- 导出 `AMapLoaderService`

## 3.0.0 (2020-02-06)

#### New:

- 支持 `AMapUI` 库，可通过 `AmapUILoaderService` 服务加载使用，部分 UI 组件也封装成了指令，如：`ui-awesome-marker`
- 提供加载插件服务：`AmapPluginLoaderService`，部分常用插件已封装成了指令，如：`amap-tool-bar`

#### BREAKING CHANGES:

- 重写了整体的封装架构，不再使用 Promise 封装，全部使用 Observable
- `@Output` 事件命名统一调整为: 包含`na`前缀
- 不再提供 Getter 和 Setter 的 Wrapper，建议直接调用 `amap` 原生对象的方法
- 移除 amap 相关的类型定义，引入 `@types/amap-js-api`

## 2.2.1 & 1.4.1 (2019-09-23)

#### Bugfix

- 修复 Icon imageSize [issue#40](https://github.com/xieziyu/ngx-amap/issues/40)

## 2.2.0 & 1.4.0 (2018-11-29)

#### New

- 支持路径规划：
  - AMap.Driving 驾车路线规划服务：AmapDrivingService
  - AMap.TruckDriving 货车路线规划服务：AmapTruckDrivingService
  - AMap.Transfer 公交换乘路线规划服务：AmapTransferService
  - AMap.Walking 步行路线规划服务：AmapWalkingService
  - AMap.Riding 骑行路线规划服务：AmapRidingService

## 2.1.1 & 1.3.3 (2018-06-22)

#### Bugfix

- [amapAutocomplete] 切换 city 时不起作用 [issue#23](https://github.com/xieziyu/ngx-amap/issues/23)

## 2.1.0 (2018-05-24)

#### New

- 新增支持图层 AMap.Heatmap 指令：amap-heatmap

## 2.0.0 (2018-05-11)

#### New

- 支持 Angular 6

## 1.3.2 (2018-04-17)

#### New

- 新增支持 AMap.DistrictSearch 行政区查询服务：AmapDistrictSearchService (感谢: [noob9527](https://github.com/noob9527))

## 1.3.1 (2018-03-27)

#### New

- [demo](https://xieziyu.github.io/ngx-amap/#/amap-circle/methods) AMap.CircleEditor 编辑功能：amap-circle `[editor]="true"`
- [demo](https://xieziyu.github.io/ngx-amap/#/amap-polyline/methods) AMap.PolyEditor 编辑功能：amap-polyline, amap-polygon `[editor]="true"`
- [demo](https://xieziyu.github.io/ngx-amap/#/amap-bezier-curve/methods) AMap.BezierCurveEditor 编辑功能：amap-bezier-curve `[editor]="true" [editorOptions]="editorOptions"`
- [demo](https://xieziyu.github.io/ngx-amap/#/amap-ellipse/methods) AMap.EllipseEditor 编辑功能：amap-ellipse `[editor]="true"`
- [demo](https://xieziyu.github.io/ngx-amap/#/amap-rectangle/methods) AMap.RectangleEditor 编辑功能：amap-rectangle `[editor]="true"`
- 添加 editor 相关事件 emitter，例如：`(editorAddnode)`, `(editorAdjust)`等，详见各 demo

## 1.3.0 (2018-03-26)

#### New

- 新增支持覆盖物 AMap.Polygon 指令：amap-polygon
- 新增支持覆盖物 AMap.Text 指令：amap-text
- 新增支持覆盖物 AMap.BezierCurve 指令：amap-bezier-curve
- 新增支持覆盖物 AMap.Ellipse 指令：amap-ellipse
- 新增支持覆盖物 AMap.Rectangle 指令：amap-rectangle

#### Changes

- 对大部分指令和组件增加 exportAs，方便在模板中引用指令实例

## 1.2.0 (2018-03-21)

#### New

- 新增支持 AMap.MouseTool 鼠标工具插件：AmapMouseToolService (感谢: [noob9527](https://github.com/noob9527))

## 1.1.2 (2018-02-28)

#### New

- ngx-amap 支持 gridMapForeign 选项，以显示国外的地图细节

## 1.1.1 (2018-02-05)

#### New

- 新增支持覆盖物 AMap.CircleMarker 的指令：amap-circle-marker (需要高德 API-v1.4.3 支持)

## 1.1.0 (2018-02-05)

#### New

- 新增支持覆盖物 AMap.Circle 的指令：amap-circle

#### Changes

- 默认高德 API 的 baseUrl 调整为 https 协议
- 默认高德 API 的版本调整为 1.4.3

## 1.0.1 (2017-11-29)

#### Bugfix

- 修复 input[Autocomplete] 指令事件错误的问题

## 1.0.0 (2017-11-29)

#### New

- 新增支持 AMap.PlaceSearch 的搜索服务：AmapPlaceSearchService

## 1.0.0-beta.4 (2017-11-28)

#### New

- 新增支持 AMap.Geocoder 的地理服务：AmapGeocoderService
- 新增支持 AMap.Autocomplete 的搜索服务和指令：AmapAutocompleteService, AmapAutocompleteDirective

#### Changes

- 逻辑变更：marker 在没有 position 的时候不再绘制于默认位置
- 逻辑变更：info-window 现在会跟随它的 hostMarker 改变位置
