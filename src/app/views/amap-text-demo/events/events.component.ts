import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  code_html = require('!!html-loader!./events.component.html');

  constructor() {}

  ngOnInit() {}

  onEvent(event: any, type: string) {
    console.log('text event:', type, event);
  }
}
