import { Map } from '../amap.map';
import { Bounds } from '../amap.bounds';
import { BezierCurveOptions, CurvePath } from '../../interface/overlays/bezier-curve-options.interface';

export interface CBezierCurve {
  new (opts: BezierCurveOptions): BezierCurve;
}

export interface BezierCurve {
  setPath(path: CurvePath);
  getPath();
  setOptions(opt: BezierCurveOptions);
  getOptions(): BezierCurveOptions;
  getLength(): number;
  getBounds(): Bounds;
  hide(): void;
  show(): void;
  setMap(map: Map);
  setExtData(ext: any): void;
  getExtData(): any;
}
