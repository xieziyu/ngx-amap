import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() search = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSearch(value) {
    this.search.emit(value);
  }
}
