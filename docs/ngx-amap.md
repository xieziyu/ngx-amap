# Component: `<ngx-amap></ngx-amap>`

## Table of contents 
1. [Usage](#usage)
2. [Input](#input)
3. [Event](#event)
4. [Method](#method)

# Usage
ngx-amap is the AMap container. Use it with **pre-defined height**.
  + html
  ```html
  <ngx-amap class="demo-map"></ngx-amap>
  ```

  + css
  ```css
  .demo-map {
    height: 400px;
  }
  ```

# Input
+ It accepts the `MapOptions` as the `@Input()` attributes, check `MapOptions` in [**Types.md**](https://github.com/xieziyu/ngx-amap/blob/master/docs/Types.md)
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

+ It also support extra attributes:
  + `city`: string
  ```html
  <ngx-amap class="demo-map" [city]="myCity"></ngx-amap>
  ```

  + `name`: string
  ```html
  <ngx-amap class="demo-map" name="myMapName"></ngx-amap>
  ```

# Event
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

# Method
+ `setFitView()`: Promise<void>

  + component
  ```typescript
  import { NgxAmapComponent } from 'ngx-amap/core/components';

  @ViewChildren(NgxAmapComponent)
  maps: QueryList<NgxAmapComponent>;

  setFitView() {
    this.maps.find(m => m.name === 'myMapName').setFitView();
  }
  ```