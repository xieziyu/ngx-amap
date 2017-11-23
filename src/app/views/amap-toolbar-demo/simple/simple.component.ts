import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  demo_md_html = `\
<ngx-amap class="demo-map">
  <amap-tool-bar></amap-tool-bar>
</ngx-amap>
`;

  constructor() { }

  ngOnInit() {
  }

}
