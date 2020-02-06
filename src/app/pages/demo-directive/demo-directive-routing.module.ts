import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoAmapMarkerComponent } from './demo-amap-marker/demo-amap-marker.component';
import { DemoAmapPolylineComponent } from './demo-amap-polyline/demo-amap-polyline.component';
import { DemoAmapPolygonComponent } from './demo-amap-polygon/demo-amap-polygon.component';
import { DemoAmapBezierCurveComponent } from './demo-amap-bezier-curve/demo-amap-bezier-curve.component';
import { DemoAmapRectangleComponent } from './demo-amap-rectangle/demo-amap-rectangle.component';
import { DemoAmapCircleComponent } from './demo-amap-circle/demo-amap-circle.component';
import { DemoAmapCircleMarkerComponent } from './demo-amap-circle-marker/demo-amap-circle-marker.component';
import { DemoAmapEllipseComponent } from './demo-amap-ellipse/demo-amap-ellipse.component';

const routes: Routes = [
  { path: '', redirectTo: 'amap-marker', pathMatch: 'full' },
  { path: 'amap-marker', component: DemoAmapMarkerComponent },
  { path: 'amap-polyline', component: DemoAmapPolylineComponent },
  { path: 'amap-polygon', component: DemoAmapPolygonComponent },
  { path: 'amap-bezier-curve', component: DemoAmapBezierCurveComponent },
  { path: 'amap-rectangle', component: DemoAmapRectangleComponent },
  { path: 'amap-circle', component: DemoAmapCircleComponent },
  { path: 'amap-circle-marker', component: DemoAmapCircleMarkerComponent },
  { path: 'amap-ellipse', component: DemoAmapEllipseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoDirectiveRoutingModule {}
