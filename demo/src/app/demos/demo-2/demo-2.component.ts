import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-2',
  templateUrl: './demo-2.component.html',
  styleUrls: ['./demo-2.component.scss']
})
export class Demo2Component implements OnInit {
  myCity = '上海';
  myCityName = '';

  constructor() { }

  ngOnInit() {
  }

}
