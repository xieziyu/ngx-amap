export const navigation = [
  {
    name: '首页',
    url: '/home',
    icon: 'fa fa-home',
  },
  {
    title: true,
    name: '实例演示'
  },
  {
    name: 'ngx-amap',
    url: '/ngx-amap',
    icon: 'fa fa-code',
    children: [
      {
        name: '简单示例',
        url: '/ngx-amap/simple',
        icon: 'fa fa-html5'
      },
      {
        name: '调用方法',
        url: '/ngx-amap/methods',
        icon: 'fa fa-html5'
      },
      {
        name: '事件',
        url: '/ngx-amap/events',
        icon: 'fa fa-html5'
      },
    ]
  },
  {
    name: 'amap-marker',
    url: '/amap-marker',
    icon: 'fa fa-code',
    children: [
      {
        name: '简单示例',
        url: '/amap-marker/simple',
        icon: 'fa fa-html5'
      },
      {
        name: '调用方法',
        url: '/amap-marker/methods',
        icon: 'fa fa-html5'
      },
      {
        name: '事件',
        url: '/amap-marker/events',
        icon: 'fa fa-html5'
      },
    ]
  },
  {
    name: 'amap-polyline',
    url: '/amap-polyline',
    icon: 'fa fa-code',
    children: [
      {
        name: '简单示例',
        url: '/amap-polyline/simple',
        icon: 'fa fa-html5'
      },
      {
        name: '调用方法',
        url: '/amap-polyline/methods',
        icon: 'fa fa-html5'
      },
      {
        name: '事件',
        url: '/amap-polyline/events',
        icon: 'fa fa-html5'
      },
    ]
  },
];
