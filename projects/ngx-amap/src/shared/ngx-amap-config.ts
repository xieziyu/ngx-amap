import { InjectionToken } from '@angular/core';

export interface NgxAmapConfig {
  apiKey?: string;
  apiVersion?: string;
  uiVersion?: string;
  protocol?: 'http' | 'https';
  debug?: boolean;
  debugTags?: string;
}

export const NGX_AMAP_CONFIG = new InjectionToken<NgxAmapConfig>('NGX_AMAP_CONFIG');
