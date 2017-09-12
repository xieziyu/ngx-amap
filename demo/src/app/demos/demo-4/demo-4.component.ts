import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-4',
  templateUrl: './demo-4.component.html'
})
export class Demo4Component implements OnInit {
  pluginHidden = false;
  showRuler = false;
  showDirection = true;
  showLocate = true;

  constructor() { }

  ngOnInit() {
  }

  togglePlugin() {
    this.pluginHidden = !this.pluginHidden;
  }

  toggleRuler() {
    this.showRuler = !this.showRuler;
  }

  toggleDirection() {
    this.showDirection = !this.showDirection;
  }

  toggleLocation() {
    this.showLocate = !this.showLocate;
  }

  onZoomChanged(event) {
    console.log('on zoom changed:', event);
  }
}
