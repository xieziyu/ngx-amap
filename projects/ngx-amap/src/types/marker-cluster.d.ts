/// <reference types="amap-js-api" />

declare namespace AMap {
  namespace MarkerClusterer {
    interface EventMap<I = MarkerClusterer> {
      click: Event<
        'click',
        {
          /**
           * 点击的聚合点对象
           */
          cluster: MarkerClusterer;
          /**
           * 点击的位置点坐标
           */
          lnglat: LocationValue;
          /**
           * 点聚合插件对象
           */
          target: I;
          /*
           * 点击的聚合点所包含的点对象
           */
          marker: Marker<any>[];
        }
      >;
    }

    type StyleObject = {
      url?: string;
      size?: Size;
      offset?: Pixel;
      imageOffset?: Pixel;
      textColor?: string;
      textSize?: number;
    };

    interface Options {
      /**
       * 聚合计算时网格的像素大小，默认60
       */
      gridSize?: number;
      /**
       * 聚合的最小数量。默认值为2，即小于2个点则不能成为一个聚合
       */
      minClusterSize?: number;
      /**
       * 最大的聚合级别，大于该级别就不进行相应的聚合。默认值为18
       */
      maxZoom?: number;
      /**
       * 聚合点的图标位置是否是所有聚合内点的中心点。默认为否
       */
      averageCenter?: boolean;
      /**
       * 指定聚合后的点标记的图标样式，可缺省，缺省时为默认样式
       */
      styles?: StyleObject[];
      /**
       * 该方法用来实现聚合点的自定义绘制
       */
      renderClusterMarker?: (obj: {
        count: number;
        markers: Marker<any>[];
        marker: Marker<any>;
      }) => void;
      /**
       * 点击聚合点时，是否散开，默认值为：true
       */
      zoomOnClick?: boolean;
    }
  }

  interface MarkerClusterer {
    new (options?: MarkerClusterer.Options): MarkerClusterer;
  }

  class MarkerClusterer extends EventEmitter {
    /**
     * 点聚合
     * @param options 选项
     */
    constructor(map: AMap.Map, markers: Marker[], options?: MarkerClusterer.Options);
    /**
     * 添加一个需进行聚合的点标记
     */
    addMarker(marker: Marker): void;
    /**
     * 删除一个聚合的点标记
     */
    removeMarker(marker: Marker): void;
    /**
     * 获取聚合点的总数量
     */
    getClustersCount(): number;
    /**
     * 获取聚合网格的像素大小
     */
    getGridSize(): number;
    /**
     * 获取地图中点标记的最大聚合级别
     */
    getMaxZoom(): number;
    /**
     * 获取单个聚合的最小数量
     */
    getMinClusterSize(): number;
    /**
     * 获取聚合的样式风格集合
     */
    getStyles(): MarkerClusterer.StyleObject[];
    /**
     * 设置聚合网格的像素大小
     */
    setGridSize(size: number): void;
    /**
     * 设置地图中点标记的最大聚合级别
     */
    setMaxZoom(zoom: number): void;
    /**
     * 设置单个聚合的最小数量
     */
    setMinClusterSize(size: number): void;
    /**
     * 设置聚合的样式风格
     */
    setStyles(styles: MarkerClusterer.StyleObject[]): void;
    /**
     * 从地图上彻底清除所有聚合点标记
     */
    clearMarkers(): void;
    /**
     * 设置将进行点聚合的地图对象
     */
    setMap(map: AMap.Map): void;
    /**
     * 设置将进行点聚合显示的点标记集合
     */
    setMarkers(markers: Marker[]): void;
    /**
     * 获取该点聚合的地图对象
     */
    getMap(): AMap.Map;
    /**
     * 获取该点聚合中的点标记集合
     */
    getMarkers(): Marker[];
    /**
     * 添加一组需进行聚合的点标记
     */
    addMarkers(markers: Marker[]): void;
    /**
     * 删除一组聚合的点标记
     */
    removeMarkers(markers: Marker[]): void;
    /**
     * 获取单个聚合点位置是否是聚合内所有标记的平均中心
     */
    isAverageCenter(): boolean;
    /**
     * 设置单个聚合点位置是否是聚合内所有标记的平均中心
     */
    setAverageCenter(averageCenter: boolean): void;
  }
}
