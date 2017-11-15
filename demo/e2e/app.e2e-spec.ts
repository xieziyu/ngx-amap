import { NgxAMapPage } from './app.po';

describe('ngx-amap App', () => {
  let page: NgxAMapPage;

  beforeEach(() => {
    page = new NgxAMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
