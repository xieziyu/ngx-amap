# Types

## Table of contents 
1. [Usage](#usage)
2. [Supported Types](#supported-types)

# Usage
import type interfaces from `'ngx-amap/types'`. For example:
  + import all in one namespace:
  ```typescript
  import * as AMapType from 'ngx-amap/types';

  const mapOptions: AMapType.MapOptions;
  const markerOptions: AMapType.MarkerOptions;
  ```
  + import individually:
  ```typescript
  import { MapOptions, MarkerOptions } from 'ngx-amap/types';

  const mapOptions: MapOptions;
  const markerOptions: MarkerOptions;
  ```

# Supported Types
+ **SizeOptions**: 
  ```typescript
  {
    width: number;
    height: number;
  }
  ```

  + Refer to constructor of [AMap.Size](http://lbs.amap.com/api/javascript-api/reference/core)
  + 用于构造`AMap.Size`, 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/core)

+ **PixelOptions**:
  ```typescript
  {
    x: number;
    y: number;
  }
  ```

  + Refer to constructor of [AMap.Pixel](http://lbs.amap.com/api/javascript-api/reference/core)
  + 用于构造`AMap.Pixel`, 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/core)

+ **LabelOptions**:
  ```typescript
  {
    content: string;
    offset: PixelOptions;
  }
  ```

  + Refer to label of [MarkerOptions](http://lbs.amap.com/api/javascript-api/reference/overlay)
  + 用于构造点标签的`label`属性, 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/overlay)

+ **IconOptions**:
  ```typescript
  {
    size?: SizeOptions;
    imageOffset?: PixelOptions;
    image?: string;
    imageSize?: SizeOptions;
  }
  ```
  + Refer to constructor of [AMap.Icon](http://lbs.amap.com/api/javascript-api/reference/overlay)
  + 用于构造`AMap.Icon`, 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/overlay)

+ **MapOptions**:
  + Refer to [MapOptions](http://lbs.amap.com/api/javascript-api/reference/map)
  + 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/map)

+ **MarkerOptions**:
  + Refer to [MarkerOptions](http://lbs.amap.com/api/javascript-api/reference/overlay)
  + 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/overlay)

+ **Map**:
  + Refer to [AMap.Map](http://lbs.amap.com/api/javascript-api/reference/map)
  + 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/map)

+ **Marker**:
  + Refer to [AMap.Marker](http://lbs.amap.com/api/javascript-api/reference/overlay)
  + 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/overlay)

+ **LngLat**:
  + Refer to [AMap.LngLat](http://lbs.amap.com/api/javascript-api/reference/core)
  + 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/core)

+ **Size**:
  + Refer to [AMap.Size](http://lbs.amap.com/api/javascript-api/reference/core)
  + 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/core)

+ **Pixel**:
  + Refer to [AMap.Pixel](http://lbs.amap.com/api/javascript-api/reference/core)
  + 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/core)

+ **Icon**:
  + Refer to [AMap.Icon](http://lbs.amap.com/api/javascript-api/reference/overlay)
  + 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/overlay)

+ **Label**:
  ```typescript
  {
    content: string;
    offset: Pixel;
  }
  ```
  + Refer to label of [MarkerOptions](http://lbs.amap.com/api/javascript-api/reference/overlay)
  + 点标签的`label`属性, 参见[高德地图文档](http://lbs.amap.com/api/javascript-api/reference/overlay)
