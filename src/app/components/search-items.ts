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
    name: 'ngx-amap'
  },
  {
    type: ITEM_TYPE.COMPONENT,
    link: '/amap-info-window/simple',
    name: 'amap-info-window'
  },
  // ======= DIRECTIVES =======
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-marker/simple',
    name: 'amap-marker'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-text/simple',
    name: 'amap-text'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-polyline/simple',
    name: 'amap-polyline'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-polygon/simple',
    name: 'amap-polygon'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-bezier-curve/methods',
    name: 'amap-bezier-curve'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-rectangle/methods',
    name: 'amap-rectangle'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-circle/simple',
    name: 'amap-circle'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-circle-marker/simple',
    name: 'amap-circle-marker'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-ellipse/methods',
    name: 'amap-ellipse'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-tool-bar/simple',
    name: 'amap-tool-bar'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-marker-clusterer/simple',
    name: 'amap-marker-clusterer'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-autocomplete/simple',
    name: '[amapAutocomplete]'
  },
  {
    type: ITEM_TYPE.DIRECTIVE,
    link: '/amap-heatmap/simple',
    name: 'amap-heatmap'
  },
  // ======= SERVICES =======
  {
    type: ITEM_TYPE.SERVICE,
    link: '/AmapGeocoderService/encode',
    name: 'AmapGeocoderService'
  },
  {
    type: ITEM_TYPE.SERVICE,
    link: '/AmapAutocompleteService/search',
    name: 'AmapAutocompleteService'
  },
  {
    type: ITEM_TYPE.SERVICE,
    link: '/AmapPlaceSearchService/simple',
    name: 'AmapPlaceSearchService'
  },
  {
    type: ITEM_TYPE.SERVICE,
    link: '/AmapDistrictSearchService/simple',
    name: 'AmapDistrictSearchService'
  },
  {
    type: ITEM_TYPE.SERVICE,
    link: '/AmapMouseToolService/simple',
    name: 'AmapMouseToolService'
  },
];

