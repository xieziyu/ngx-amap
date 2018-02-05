import { Component, OnInit } from '@angular/core';
import { CODE_HTML, CODE_TS } from './code';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  demo_md_html = CODE_HTML;
  demo_md_ts = CODE_TS;

  hide = false;
  options = {
    center: [116.407394, 39.904211], // 圆心位置
    radius: 12,
    strokeColor: 'white',
    strokeOpacity: 0.5,
    strokeWeight: 2,
    fillColor: 'rgba(0,0,255,1)',
    fillOpacity: 0.5,
    zIndex: 10,
    bubble: true,
    cursor: 'pointer',
  };

  constructor() { }

  ngOnInit() {
  }

  onEvent(event: any, type: string) {
    console.log('circle marker event:', type, event);
  }
}
