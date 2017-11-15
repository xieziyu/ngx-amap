import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { NgxAmapComponent } from 'ngx-amap/core/components';

@Component({
  selector: 'app-demo-2',
  templateUrl: './demo-2.component.html',
  styleUrls: ['./demo-2.component.scss']
})
export class Demo2Component implements OnInit {
  myCity = '上海';
  myCityName = '';

  @ViewChildren(NgxAmapComponent)
  maps: QueryList<NgxAmapComponent>;

  constructor() { }

  ngOnInit() {
  }

  setFitView() {
    this.maps.find(m => m.name === 'demo2-2').setFitView();
  }
}
