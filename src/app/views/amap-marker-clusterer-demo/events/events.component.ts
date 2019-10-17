import { Component, OnInit } from '@angular/core';
import { POINTS } from '../points';

declare const require: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  demo_md_html = require('!!html-loader!./events.component.html');
  demo_md_ts = require('!!raw-loader!./events.component.ts');

  markers = POINTS;

  constructor() {}

  ngOnInit() {}

  onClusterEvent(event: any, type: string) {
    console.log('clusterer event:', type, event);
  }
}
