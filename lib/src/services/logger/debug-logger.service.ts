import { Injectable } from '@angular/core';

@Injectable()
export class DebugLoggerService {

  constructor() { }

  i(tag: string, ...args: any[]) {
    console.log(`[${tag}]`, ...args);
  }

  e(tag: string, ...args: any[]) {
    console.error(`[${tag}]`, ...args);
  }

  w(tag: string, ...args: any[]) {
    console.warn(`[${tag}]`, ...args);
  }

  d(tag: string, ...args: any[]) {
    console.log(`[${tag}]`, ...args);
  }
}
