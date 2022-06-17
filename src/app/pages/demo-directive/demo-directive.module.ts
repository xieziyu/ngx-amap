// eslint-disable  max-len
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAmapModule } from 'ngx-amap';
import { SharedModule } from '../../shared/shared.module';
import { DemoDirectiveRoutingModule } from './demo-directive-routing.module';
import { DemoAmapMarkerComponent } from './demo-amap-marker/demo-amap-marker.component';
import { DemoAmapMarkerSimpleComponent } from './demo-amap-marker/demo-amap-marker-simple/demo-amap-marker-simple.component';
import { DemoAmapMarkerMethodsComponent } from './demo-amap-marker/demo-amap-marker-methods/demo-amap-marker-methods.component';
import { DemoAmapMarkerEventsComponent } from './demo-amap-marker/demo-amap-marker-events/demo-amap-marker-events.component';
import { DemoAmapPolylineComponent } from './demo-amap-polyline/demo-amap-polyline.component';
import { DemoAmapPolylineSimpleComponent } from './demo-amap-polyline/demo-amap-polyline-simple/demo-amap-polyline-simple.component';
import { DemoAmapPolylineMethodsComponent } from './demo-amap-polyline/demo-amap-polyline-methods/demo-amap-polyline-methods.component';
import { DemoAmapPolylineEventsComponent } from './demo-amap-polyline/demo-amap-polyline-events/demo-amap-polyline-events.component';
import { DemoAmapPolygonComponent } from './demo-amap-polygon/demo-amap-polygon.component';
import { DemoAmapPolygonSimpleComponent } from './demo-amap-polygon/demo-amap-polygon-simple/demo-amap-polygon-simple.component';
import { DemoAmapPolygonEventsComponent } from './demo-amap-polygon/demo-amap-polygon-events/demo-amap-polygon-events.component';
import { DemoAmapPolygonMethodsComponent } from './demo-amap-polygon/demo-amap-polygon-methods/demo-amap-polygon-methods.component';
import { DemoAmapBezierCurveComponent } from './demo-amap-bezier-curve/demo-amap-bezier-curve.component';
import { DemoAmapBezierCurveSimpleComponent } from './demo-amap-bezier-curve/demo-amap-bezier-curve-simple/demo-amap-bezier-curve-simple.component';
import { DemoAmapBezierCurveEventsComponent } from './demo-amap-bezier-curve/demo-amap-bezier-curve-events/demo-amap-bezier-curve-events.component';
import { DemoAmapBezierCurveMethodsComponent } from './demo-amap-bezier-curve/demo-amap-bezier-curve-methods/demo-amap-bezier-curve-methods.component';
import { DemoAmapRectangleComponent } from './demo-amap-rectangle/demo-amap-rectangle.component';
import { DemoAmapRectangleSimpleComponent } from './demo-amap-rectangle/demo-amap-rectangle-simple/demo-amap-rectangle-simple.component';
import { DemoAmapRectangleEventsComponent } from './demo-amap-rectangle/demo-amap-rectangle-events/demo-amap-rectangle-events.component';
import { DemoAmapRectangleMethodsComponent } from './demo-amap-rectangle/demo-amap-rectangle-methods/demo-amap-rectangle-methods.component';
import { DemoAmapCircleComponent } from './demo-amap-circle/demo-amap-circle.component';
import { DemoAmapCircleSimpleComponent } from './demo-amap-circle/demo-amap-circle-simple/demo-amap-circle-simple.component';
import { DemoAmapCircleEventsComponent } from './demo-amap-circle/demo-amap-circle-events/demo-amap-circle-events.component';
import { DemoAmapCircleMethodsComponent } from './demo-amap-circle/demo-amap-circle-methods/demo-amap-circle-methods.component';
import { DemoAmapCircleMarkerComponent } from './demo-amap-circle-marker/demo-amap-circle-marker.component';
import { DemoAmapCircleMarkerSimpleComponent } from './demo-amap-circle-marker/demo-amap-circle-marker-simple/demo-amap-circle-marker-simple.component';
import { DemoAmapCircleMarkerEventsComponent } from './demo-amap-circle-marker/demo-amap-circle-marker-events/demo-amap-circle-marker-events.component';
import { DemoAmapCircleMarkerMethodsComponent } from './demo-amap-circle-marker/demo-amap-circle-marker-methods/demo-amap-circle-marker-methods.component';
import { DemoAmapEllipseComponent } from './demo-amap-ellipse/demo-amap-ellipse.component';
import { DemoAmapEllipseSimpleComponent } from './demo-amap-ellipse/demo-amap-ellipse-simple/demo-amap-ellipse-simple.component';
import { DemoAmapEllipseEventsComponent } from './demo-amap-ellipse/demo-amap-ellipse-events/demo-amap-ellipse-events.component';
import { DemoAmapEllipseMethodsComponent } from './demo-amap-ellipse/demo-amap-ellipse-methods/demo-amap-ellipse-methods.component';

@NgModule({
  declarations: [
    DemoAmapMarkerComponent,
    DemoAmapMarkerSimpleComponent,
    DemoAmapMarkerMethodsComponent,
    DemoAmapMarkerEventsComponent,
    DemoAmapPolylineComponent,
    DemoAmapPolylineSimpleComponent,
    DemoAmapPolylineMethodsComponent,
    DemoAmapPolylineEventsComponent,
    DemoAmapPolygonComponent,
    DemoAmapPolygonSimpleComponent,
    DemoAmapPolygonEventsComponent,
    DemoAmapPolygonMethodsComponent,
    DemoAmapBezierCurveComponent,
    DemoAmapBezierCurveSimpleComponent,
    DemoAmapBezierCurveEventsComponent,
    DemoAmapBezierCurveMethodsComponent,
    DemoAmapRectangleComponent,
    DemoAmapRectangleSimpleComponent,
    DemoAmapRectangleEventsComponent,
    DemoAmapRectangleMethodsComponent,
    DemoAmapCircleComponent,
    DemoAmapCircleSimpleComponent,
    DemoAmapCircleEventsComponent,
    DemoAmapCircleMethodsComponent,
    DemoAmapCircleMarkerComponent,
    DemoAmapCircleMarkerSimpleComponent,
    DemoAmapCircleMarkerEventsComponent,
    DemoAmapCircleMarkerMethodsComponent,
    DemoAmapEllipseComponent,
    DemoAmapEllipseSimpleComponent,
    DemoAmapEllipseEventsComponent,
    DemoAmapEllipseMethodsComponent,
  ],
  imports: [CommonModule, SharedModule, NgxAmapModule, DemoDirectiveRoutingModule],
})
export class DemoDirectiveModule {}
