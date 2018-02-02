export const CODE_HTML = `\
<ngx-amap class="demo-map" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-circle
    [center]="[116.403322, 39.920255]"
    [radius]="1000"
    [strokeColor]="'#F33'"
    [strokeOpacity]="1"
    [strokeWeight]="3"
    [fillColor]="'#ee2200'"
    [fillOpacity]="0.35">
  </amap-circle>
</ngx-amap>
`;

export const CODE_TS = `\
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}`;