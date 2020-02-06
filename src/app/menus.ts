export interface AppMenu {
  path: string;
  text: string;
  icon?: string;
  iconTheme?: string;
  submenus?: AppMenu[];
}

export const APP_MENUS: AppMenu[] = [
  {
    path: '/welcome',
    icon: 'home',
    text: '首页',
  },
  {
    path: '/components',
    icon: 'appstore',
    text: '组件',
    submenus: [
      {
        path: '/components/ngx-amap',
        text: 'ngx-amap',
      },
      {
        path: '/components/amap-info-window',
        text: 'amap-info-window',
      },
      {
        path: '/components/amap-text',
        text: 'amap-text',
      },
    ],
  },
  {
    path: '/directives',
    icon: 'code',
    text: '指令',
    submenus: [
      {
        path: '/directives/amap-marker',
        text: 'amap-marker',
      },
      {
        path: '/directives/amap-polyline',
        text: 'amap-polyline',
      },
      {
        path: '/directives/amap-polygon',
        text: 'amap-polygon',
      },
      {
        path: '/directives/amap-bezier-curve',
        text: 'amap-bezier-curve',
      },
      {
        path: '/directives/amap-rectangle',
        text: 'amap-rectangle',
      },
      {
        path: '/directives/amap-circle',
        text: 'amap-circle',
      },
      {
        path: '/directives/amap-circle-marker',
        text: 'amap-circle-marker',
      },
      {
        path: '/directives/amap-ellipse',
        text: 'amap-ellipse',
      },
    ],
  },
  {
    path: '/plugins',
    icon: 'code',
    text: '插件指令',
    submenus: [
      {
        path: '/plugins/amap-tool-bar',
        text: 'amap-tool-bar',
      },
      {
        path: '/plugins/amap-marker-cluster',
        text: 'amap-marker-cluster',
      },
      {
        path: '/plugins/amap-heatmap',
        text: 'amap-heatmap',
      },
      {
        path: '/plugins/amap-autocomplete',
        text: 'input[amapAutocomplete]',
      },
    ],
  },
  {
    path: '/ui-directives',
    icon: 'code',
    text: 'UI 指令',
    submenus: [
      {
        path: '/ui-directives/ui-simple-marker',
        text: 'ui-simple-marker',
      },
      {
        path: '/ui-directives/ui-awesome-marker',
        text: 'ui-awesome-marker',
      },
    ],
  },
  {
    path: '/services',
    icon: 'deployment-unit',
    text: '服务',
    submenus: [
      {
        path: '/services/amap-plugin-loader',
        text: '插件加载服务',
      },
      {
        path: '/services/amap-ui-loader',
        text: 'UI 库加载服务',
      },
      {
        path: '/services/amap-autocomplete',
        text: 'Autocomplete',
      },
    ],
  },
];
