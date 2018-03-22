## 1.3.0 (2018-03-22)

#### New
+ 新增支持覆盖物AMap.Polygon指令：amap-polygon

#### Changes
+ 对大部分指令和组件增加exportAs，方便在模板中引用指令实例

----

## 1.2.0 (2018-03-21)

#### New
+ 新增支持AMap.MouseTool鼠标工具插件：AmapMouseToolService (感谢: [noob9527](https://github.com/noob9527))

----

## 1.1.2 (2018-02-28)

#### New
+ ngx-amap支持gridMapForeign选项，以显示国外的地图细节

----

## 1.1.1 (2018-02-05)

#### New
+ 新增支持覆盖物AMap.CircleMarker的指令：amap-circle-marker (需要高德API-v1.4.3支持)

----

## 1.1.0 (2018-02-05)

#### New
+ 新增支持覆盖物AMap.Circle的指令：amap-circle

#### Changes
+ 默认高德API的baseUrl调整为https协议
+ 默认高德API的版本调整为1.4.3

----

## 1.0.1 (2017-11-29)

#### Bugfix
+ 修复 input[Autocomplete] 指令事件错误的问题

----

## 1.0.0 (2017-11-29)

#### New
+ 新增支持AMap.PlaceSearch的搜索服务：AmapPlaceSearchService

----

## 1.0.0-beta.4 (2017-11-28)

#### New
+ 新增支持AMap.Geocoder的地理服务：AmapGeocoderService
+ 新增支持AMap.Autocomplete的搜索服务和指令：AmapAutocompleteService, AmapAutocompleteDirective

#### Changes
+ 逻辑变更：marker在没有position的时候不再绘制于默认位置
+ 逻辑变更：info-window现在会跟随它的hostMarker改变位置