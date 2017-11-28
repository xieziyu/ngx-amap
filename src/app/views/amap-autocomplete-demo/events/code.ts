export const CODE_TS = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onEvent(event: any, type: string) {
    console.log('autocomplete event:', type, event);
  }
}`;

export const CODE_HTML = `\
<form class="form-inline">
  <div class="form-group">
    <input amapAutocomplete type="text" class="form-control" id="address" placeholder="请输入地址关键字..."
      (ready)="onEvent($event, 'ready')"
      (complete)="onEvent($event, 'complete')"
      (error)="onEvent($event, 'error')"
      (select)="onEvent($event, 'select')"
      (choose)="onEvent($event, 'choose')">
  </div>
</form>`;
