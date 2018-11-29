import { Map } from './amap.map';
import { Circle } from './overlays/amap.circle';
import { Polyline } from './overlays/amap.polyline';
import { Polygon } from './overlays/amap.polygon';
import { BezierCurve } from './overlays/amap.bezier-curve';
import { Ellipse } from './overlays/amap.ellipse';
import { Rectangle } from './overlays/amap.rectangle';

// general editor class
export interface Editor<T> {
  open(): void;
  close(): void;
  on(eventName: string, handler: any, context?: any): void;
  off(eventName: string, handler: any, context?: any): void;
}

export interface CEditor<T> {
  new (map: Map, target: T): Editor<T>;
}

// BezierCurve editor class
export interface BezierCurveEditor {
  open(): void;
  close(): void;
  on(eventName: string, handler: any, context?: any): void;
  off(eventName: string, handler: any, context?: any): void;
}

export interface BezierCurveEditorOptions {
  getMarkerOptions?: (type: string) => any;
  getCtrlLineOptions?: () => any;
}

export interface CBezierCurveEditor {
  new (map: Map, target: BezierCurve, opt?: BezierCurveEditorOptions): BezierCurveEditor;
}

// Common editors
export type CircleEditor = Editor<Circle>;
export type CCircleEditor = CEditor<Circle>;

export type PolyEditor = Editor<Polyline|Polygon>;
export type CPolyEditor = CEditor<Polyline|Polygon>;

export type EllipseEditor = Editor<Ellipse>;
export type CEllipseEditor = CEditor<Ellipse>;

export type RectangleEditor = Editor<Rectangle>;
export type CRectangleEditor = CEditor<Rectangle>;
