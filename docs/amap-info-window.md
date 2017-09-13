# Component: `<amap-info-window></amap-info-window>`

## Table of contents 
1. [Usage](#usage)
2. [Input](#input)
3. [Event](#event)

# Usage
1. amap-info-window is a component to draw `AMap.InfoWindow`. It can use **inside \<ngx-amap>\</ngx-amap>**. You can customize HTMLElement inside `<amap-info-window>`
  + html
  ```html
  <ngx-amap class="demo-map" [center]="[116.397428, 39.90923]">
    <amap-info-window 
        [isOpen]="openInfoWindow"
        [position]="[116.397428, 39.90923]"
        (windowChange)="onWindowChange($event)"
        (windowOpen)="onWindowOpen($event)"
        (windowClose)="onWindowClose($event)">
        我是一个简单的信息窗体
    </amap-info-window>
  </ngx-amap>
  ```

  + css
  ```css
  .demo-map {
    height: 400px;
  }
  ```

2. It also can use **inside \<amap-marker>\</amap-marker>**. Then you can click the marker to open info window.
  + html
  ```html
  <ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
    <amap-marker *ngFor="let marker of markers; let i=index;" [position]="marker">
      <amap-info-window [offset]="{x:0, y:-30}">
        我是第{{i+1}}个marker
      </amap-info-window>
    </amap-marker>
  </ngx-amap>
  ```

# Input
+ It accepts the `InfoWindowOptions` as the `@Input()` attributes, check `InfoWindowOptions` in [**Types.md**](https://github.com/xieziyu/ngx-amap/blob/master/docs/Types.md)
  + `position`: LngLat; *[Optional/可选参数] [Variable/可变参数]*
  + `isCustom`: boolean; *[Optional]*
  + `autoMove`: boolean; *[Optional]*
  + `closeWhenClickMap`: boolean; *[Optional]*
  + `size`: Size; *[Optional]*
  + `offset`: Pixel; *[Optional]*
  + `showShadow`: boolean; *[Optional]*

  ```html
  <amap-info-window [position]="[116.397428, 39.90923]"> 我是一个简单的信息窗体</amap-info-window>
  ```

+ It also support extra attributes:
  + `isOpen`: boolean; Use it to toggle info window;
  ```html
  <amap-info-window [isOpen]="true" [position]="[116.397428, 39.90923]"> 我是一个简单的信息窗体</amap-info-window>
  ```

# Event
+ `windowOpen`: Emitted when info window is opened;
+ `windowClose`: Emitted when info window is closed;
+ `windowChange`: Emitted when info window is changed;

  + html
  ```html
  <amap-info-window [isOpen]="true" [position]="[116.397428, 39.90923]" (windowOpen)="onWindowOpen($event)"> 我是一个简单的信息窗体</amap-info-window>
  ```

  + component
  ```typescript
  onWindowOpen(e) {
    console.log(e);
  }
  ```