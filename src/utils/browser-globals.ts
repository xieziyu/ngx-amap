import { Provider } from '@angular/core';

export class WindowRef {
  getNativeWindow() {
    return window;
  }
}

export class DocumentRef {
  getNativeDocument() {
    return document;
  }
}

export const BrowserGlobalProviders: Provider[] = [WindowRef, DocumentRef];
