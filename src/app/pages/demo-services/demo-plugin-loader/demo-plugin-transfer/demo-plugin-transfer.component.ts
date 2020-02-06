import { Component } from '@angular/core';
import { AmapPluginLoaderService } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-plugin-transfer',
  templateUrl: './demo-plugin-transfer.component.html',
  styleUrls: ['./demo-plugin-transfer.component.scss'],
})
export class DemoPluginTransferComponent {
  html = require('!!html-loader!./demo-plugin-transfer.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-plugin-transfer.component.ts').default; // DEMO IGNORE
  scss = require('!!raw-loader!./demo-plugin-transfer.component.scss').default; // DEMO IGNORE
  /**
   * AMap.Transfer needs:
   * + @types/amap-js-api-place-search
   * + @types/amap-js-api-transfer
   */
  transfer: AMap.Transfer;

  constructor(private plugin: AmapPluginLoaderService) {}

  onMapReady(map: AMap.Map) {
    this.plugin.load('AMap.Transfer').subscribe(() => {
      this.transfer = new AMap.Transfer({
        map,
        city: '北京市',
        panel: 'panel',
        policy: 0, // AMap.TransferPolicy.LEAST_TIME
      });

      this.transfer.search([{ keyword: '北京地震局' }, { keyword: '北京望京西园4区' }]);
    });
  }
}
