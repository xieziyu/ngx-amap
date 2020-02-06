/// <reference types="amap-js-api" />

declare namespace AMapUI {
  namespace SimpleMarker {
    interface EventMap<I = SimpleMarker> extends AMap.Marker.EventMap<I> {}
    interface Options<ExtraData = any> extends AMap.Marker.Options<ExtraData> {
      /**
       * 样式主题
       */
      iconTheme?: 'default' | 'fresh' | 'numv1' | 'numv2';
      /**
       * 背景图标样式
       */
      iconStyle?: string | object;
      /**
       * 图标前景文字
       */
      iconLabel?: string | object;
      /**
       * 是否显示定位点
       */
      showPositionPoint?: boolean | object;
      /**
       * 内建的Dom容器上附带的class，多个class name用空格分开
       */
      containerClassNames?: string;
    }
  }

  interface SimpleMarker<ExtraData = any> {
    new (options?: SimpleMarker.Options<ExtraData>): SimpleMarker<ExtraData>;
  }

  class SimpleMarker<ExtraData = any> extends AMap.Marker<ExtraData> {
    /**
     * 点标记
     * @param options 选项
     */
    constructor(options?: SimpleMarker.Options<ExtraData>);
    /**
     * 设置背景图标样式, iconStyle取值见构造参数
     * @param iconStyle
     */
    setIconStyle(iconStyle: string | object): void;
    /**
     * 设置图标主题以及图标样式
     * @param iconTheme
     * @param iconStyle
     */
    setIconThemeAndStyle(iconTheme: string, iconStyle: string | object): void;
    /**
     * 设置图标前景文字, iconLabel取值见构造参数
     * @param iconLabel
     */
    setIconLabel(iconLabel: string | object): void;
    /**
     * 设置Marker的Dom容器上附带的class
     * @param containerClassNames
     */
    setContainerClassNames(containerClassNames: string): void;
    /**
     * 显示定位点
     */
    showPositionPoint(): void;
    /**
     * 隐藏定位点
     */
    hidePositionPoint(): void;
  }
}
