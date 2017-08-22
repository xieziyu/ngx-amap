import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // demo 2: set city:
  myCity = '上海';

  onMapReady(mapInstance: Promise<any>) {
    mapInstance.then(map => {
      console.log(map);
    });
  }
}
