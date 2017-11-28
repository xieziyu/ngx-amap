import { Component, OnInit } from '@angular/core';
import { CODE_TS, CODE_HTML } from './code';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  demo_md_html = CODE_HTML;
  demo_md_ts = CODE_TS;

  constructor() { }

  ngOnInit() {
  }

  onEvent(event: any, type: string) {
    console.log('autocomplete event:', type, event);
  }
}
