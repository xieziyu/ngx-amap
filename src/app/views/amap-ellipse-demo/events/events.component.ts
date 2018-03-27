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

  hide = false;
  options = {
    center: [116.403322, 39.920255],
    radius: [2000, 1000],
    strokeColor: '#F33',
    strokeOpacity: 1,
    strokeWeight: 3,
    fillColor: '#ee2200',
    fillOpacity: 0.35
  };

  constructor() { }

  ngOnInit() {
  }

  onEvent(event: any, type: string) {
    console.log('ellipse event:', type, event);
  }

  onEditorEvent(event: any, type: string) {
    console.log('ellipse editor event:', type, event);
  }
}
