/// <reference types="amap-js-api" />

declare namespace AMap {
  class Editor extends AMap.EventEmitter {
    open(): void;
    close(): void;
  }

  class PolyEditor extends Editor {
    constructor(map: AMap.Map, target: AMap.Polyline | AMap.Polygon | AMap.BezierCurve);
  }

  class BezierCurveEditor extends Editor {
    constructor(map: AMap.Map, target: AMap.BezierCurve);
  }

  class RectangleEditor extends Editor {
    constructor(map: AMap.Map, target: AMap.Rectangle);
  }

  class CircleEditor extends Editor {
    constructor(map: AMap.Map, target: AMap.Circle);
  }

  class EllipseEditor extends Editor {
    constructor(map: AMap.Map, target: AMap.Ellipse);
  }
}
