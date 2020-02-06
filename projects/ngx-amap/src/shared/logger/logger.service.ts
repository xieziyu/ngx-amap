import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor() {}

  i(...args: any[]) {
    console.log(...args);
  }

  e(...args: any[]) {
    console.error(...args);
  }

  w(...args: any[]) {
    console.warn(...args);
  }

  d(...args: any[]) {
    // only stub;
  }
}
