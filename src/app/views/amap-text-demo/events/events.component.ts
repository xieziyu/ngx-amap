import { Component, OnInit } from '@angular/core';
import { HTML } from './code';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  code_html = HTML;

  constructor() { }

  ngOnInit() {
  }

  onEvent(event: any, type: string) {
    console.log('text event:', type, event);
  }
}
