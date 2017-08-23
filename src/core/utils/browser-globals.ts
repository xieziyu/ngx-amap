import { Injectable } from '@angular/core';

@Injectable()
export class WindowRef {
  getNativeWindow() {
    return window;
  }
}

@Injectable()
export class DocumentRef {
  getNativeDocument() {
    return document;
  }
}
