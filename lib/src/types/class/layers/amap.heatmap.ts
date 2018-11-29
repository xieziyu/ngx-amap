import { Map } from '../amap.map';
import { HeatmapOptions } from '../../interface/layers/heatmap-options.interface';

export interface CHeatmap {
  new(map: Map, opts: HeatmapOptions): Heatmap;
}

export interface Heatmap {
  setMap(map: Map);
  setOptions(opt: HeatmapOptions);
  addDataPoint(lng: number, lat: number, count?: number);
  setDataSet(dataset: HeatmapData);

  hide(): void;
  show(): void;

  getMap(): Map;
  getOptions(): HeatmapOptions;
  getDataSet(): any;
}

export interface HeatmapLngLatData {
  lng: number;
  lat: number;
  count?: number;
}

export interface HeatmapDataSet {
  max?: number; // 权重的最大值, 不填则取数据集count最大值
  data: HeatmapLngLatData[]; // 坐标数据集
}

export interface HeatmapDataUrl {
  data: string; // jsonp格式数据的服务地址URL;
  dataParser: (data: any) => HeatmapLngLatData[]; // 数据格式转换function, 当jsonp返回结果和官方结构不一致的时候，用户可以传递一个函数用来进行数据格式转换；
}

export type HeatmapData =
  | HeatmapDataSet
  | HeatmapDataUrl;
