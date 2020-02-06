import { Component } from '@angular/core';
import { getGridLngLats } from '../../../../shared/utils/get-grid';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-awesome-marker-text-style',
  templateUrl: './demo-awesome-marker-text-style.component.html',
  styleUrls: ['./demo-awesome-marker-text-style.component.scss'],
})
export class DemoAwesomeMarkerTextStyleComponent {
  html = require('!!html-loader!./demo-awesome-marker-text-style.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-awesome-marker-text-style.component.ts').default; // DEMO IGNORE
  options: AMapUI.AwesomeMarker.Options[] = [];

  onMapReady(map: AMap.Map) {
    const colors = [
      '#1f77b4',
      '#aec7e8',
      '#ff7f0e',
      '#ffbb78',
      '#2ca02c',
      '#98df8a',
      '#d62728',
      '#ff9896',
      '#9467bd',
      '#c5b0d5',
      '#8c564b',
      '#c49c94',
      '#e377c2',
      '#f7b6d2',
      '#7f7f7f',
    ];
    const awIcons = [
      'address-book',
      'address-book-o',
      'address-card',
      'address-card-o',
      'adjust',
      'american-sign-language-interpreting',
      'anchor',
      'archive',
      'area-chart',
      'arrows',
      'arrows-h',
      'arrows-v',
      'asl-interpreting',
      'assistive-listening-systems',
      'asterisk',
    ];
    const lngLats = getGridLngLats(map, awIcons.length, 5);
    this.options = [];
    for (let i = 0, len = lngLats.length; i < len; i++) {
      this.options.push({
        // 设置 awesome Icon
        awesomeIcon: awIcons[i],
        iconLabel: {
          style: {
            color: colors[i], // 字体颜色
            fontSize: 10 + i + 'px', // 字号
          },
        },
        // 图标
        iconStyle: 'black',
        position: lngLats[i],
      });
    }
  }
}
