/// <reference types="amap-js-api" />

declare namespace AMapUI {
  namespace AwesomeMarker {
    interface EventMap<I = SimpleMarker> extends SimpleMarker.EventMap<I> {}
    interface Options<ExtraData = any> extends SimpleMarker.Options<ExtraData> {
      /**
       * icon 的名称，可用的 icons 参见 Font Awesome 官网
       */
      awesomeIcon?: string;
      /**
       * 返回字体节点上的 classNames
       */
      getClassnamesOfAwesomeIcon?: (awesomeIcon: string) => string;
    }
  }

  interface AwesomeMarker<ExtraData = any> {
    new (options?: AwesomeMarker.Options<ExtraData>): AwesomeMarker<ExtraData>;
  }

  class AwesomeMarker<ExtraData = any> extends SimpleMarker<ExtraData> {
    /**
     * 点标记
     * @param options 选项
     */
    constructor(options?: AwesomeMarker.Options<ExtraData>);
    /**
     * 设置 awesome icon
     * @param awesomeIcon
     */
    setAwesomeIcon(awesomeIcon: string): void;
  }
}
