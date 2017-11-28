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