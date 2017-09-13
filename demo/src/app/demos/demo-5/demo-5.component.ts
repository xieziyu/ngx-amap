import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-5',
  templateUrl: './demo-5.component.html'
})
export class Demo5Component implements OnInit {
  openInfoWindow = false;
  markers = [
    [116.368904, 39.923423], [116.382122, 39.921176],
    [116.387271, 39.922501], [116.398258, 39.914600]
  ];
  infoWindowOffset = {
    x: 0,
    y: -30
  };

  constructor() { }

  ngOnInit() {
  }

  toggleInfoWindow() {
    this.openInfoWindow = !this.openInfoWindow;
  }

  onWindowChange(e) {
    console.log('on info window change: ', e);
  }

  onWindowOpen(e) {
    console.log('on info window open: ', e);
  }

  onWindowClose(e) {
    console.log('on info window close: ', e);
  }
}
