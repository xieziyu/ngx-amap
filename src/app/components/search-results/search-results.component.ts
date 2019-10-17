import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() show = false;
  @Input() results: any = {};
  @Output() resultClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  resultClicked() {
    this.resultClick.emit();
  }
}
