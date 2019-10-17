import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  demo_html = require('!!html-loader!./events.component.html');

  constructor() {}

  ngOnInit() {}

  onMapEvent(event: any, type: string) {
    console.log('map event:', type, event);
  }
}
