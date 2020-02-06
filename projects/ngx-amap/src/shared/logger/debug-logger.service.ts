import { Injectable, Inject } from '@angular/core';
import { NgxAmapConfig, NGX_AMAP_CONFIG } from '../ngx-amap-config';

@Injectable()
export class DebugLoggerService {
  debugTags: string[] = [];
  debugAll = true;

  constructor(@Inject(NGX_AMAP_CONFIG) private config: NgxAmapConfig = {}) {
    if (config.debugTags) {
      if (config.debugTags === '*') {
        this.debugAll = true;
      } else {
        this.debugAll = false;
        this.debugTags = config.debugTags.split(',');
      }
    }
  }

  i(...args: any[]) {
    console.log(...args);
  }

  e(...args: any[]) {
    console.error(...args);
  }

  w(...args: any[]) {
    console.warn(...args);
  }

  d(tag: string, ...args: any[]) {
    if (this.debugAll || this.debugTags.includes(tag)) {
      console.log(`[${tag}]`, ...args);
    }
  }
}
