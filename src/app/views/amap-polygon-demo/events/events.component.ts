import { Component, OnInit } from '@angular/core';
import { TS, HTML } from './code';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  code_ts = TS;
  code_html = HTML;

  options = {};
  hide = false;

  constructor() { }

  ngOnInit() {
    let polygonArr = [];
    polygonArr.push([116.403322, 39.920255]);
    polygonArr.push([116.410703, 39.897555]);
    polygonArr.push([116.402292, 39.892353]);
    polygonArr.push([116.389846, 39.891365]);
    this.options = {
        path: polygonArr,
        strokeColor: '#FF33FF',
        strokeOpacity: 0.2,
        strokeWeight: 3,
        fillColor: '#1791fc',
        fillOpacity: 0.35
    };
  }

  onEvent(event: any, type: string) {
    console.log('polygon event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('polygon editor event:', type, event);
  }
}
