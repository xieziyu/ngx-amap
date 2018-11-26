export const enum ITEM_TYPE {
  COMPONENT = 'component',
  SERVICE = 'service',
  DIRECTIVE = 'directive'
}

export const SEARCH_ITEMS = [
  // ======= COMPONENTS =======
  {
    type: ITEM_TYPE.COMPONENT,
    link: '/ngx-amap/simple',
    name: 'ngx-amap',
    zhCN: '地图'
  },
  {
    type: ITEM_TYPE.COMPONENT,
    link: '/amap-info-window/simple',
    name: 'amap-info-window',
    zhCN: '信息窗体'
  },
  // ======= DIRECTIVES =======
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-marker/simple',
    name: 'amap-marker',
    zhCN: '覆盖物：点标记'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-text/simple',
    name: 'amap-text',
    zhCN: '覆盖物：文本标记'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-polyline/simple',
    name: 'amap-polyline',
    zhCN: '覆盖物：折线'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-polygon/simple',
    name: 'amap-polygon',
    zhCN: '覆盖物：多边形'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-bezier-curve/methods',
    name: 'amap-bezier-curve',
    zhCN: '覆盖物：贝塞尔曲线'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-rectangle/methods',
    name: 'amap-rectangle',
    zhCN: '覆盖物：矩形'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-circle/simple',
    name: 'amap-circle',
    zhCN: '覆盖物：圆'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-circle-marker/simple',
    name: 'amap-circle-marker',
    zhCN: '覆盖物：圆点标记'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-ellipse/methods',
    name: 'amap-ellipse',
    zhCN: '覆盖物：椭圆'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-tool-bar/simple',
    name: 'amap-tool-bar',
    zhCN: '工具条插件'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-marker-clusterer/simple',
    name: 'amap-marker-clusterer',
    zhCN: '点聚合插件'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-autocomplete/simple',
    name: '[amapAutocomplete]',
    zhCN: '关键字提示'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-heatmap/simple',
    name: 'amap-heatmap',
    zhCN: '图层：热力图'
  },
  // ======= SERVICES =======
  {
    type: ITEM_TYPE.SERVICE,
    link: '/AmapGeocoderService/encode',
    name: 'AmapGeocoderService',
    zhCN: '地理编码服务'
  },
  {
    type: ITEM_TYPE.SERVICE,
    link: '/AmapAutocompleteService/search',
    name: 'AmapAutocompleteService',
    zhCN: '关键字提示服务'
  },
  {
    type: ITEM_TYPE.SERVICE,
    link: '/AmapPlaceSearchService/simple',
    name: 'AmapPlaceSearchService',
    zhCN: '地点搜索服务'
  },
  {
    type: ITEM_TYPE.SERVICE,
    link: '/AmapDistrictSearchService/simple',
    name: 'AmapDistrictSearchService',
    zhCN: '行政区搜索服务'
  },
  {
    type: ITEM_TYPE.SERVICE,
    link: '/AmapMouseToolService/simple',
    name: 'AmapMouseToolService',
    zhCN: '鼠标工具插件'
  },
  {
    type: ITEM_TYPE.SERVICE,
    link: '/AmapDrivingService/simple',
    name: 'AmapDrivingService',
    zhCN: '驾车路线规划服务'
  },
  {
    type: ITEM_TYPE.SERVICE,
    link: '/AmapTransferService/simple',
    name: 'AmapTransferService',
    zhCN: '换乘路线规划服务'
  },
];

