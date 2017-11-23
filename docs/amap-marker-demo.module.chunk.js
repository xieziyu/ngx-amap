webpackJsonp(["amap-marker-demo.module"],{

/***/ "../../../../../src/app/views/amap-marker-demo/amap-marker-demo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmapMarkerDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_simple_component__ = __webpack_require__("../../../../../src/app/views/amap-marker-demo/simple/simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__methods_methods_component__ = __webpack_require__("../../../../../src/app/views/amap-marker-demo/methods/methods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events_component__ = __webpack_require__("../../../../../src/app/views/amap-marker-demo/events/events.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: '/ngx-amap/simple',
        pathMatch: 'full',
    },
    {
        path: 'simple',
        component: __WEBPACK_IMPORTED_MODULE_2__simple_simple_component__["a" /* SimpleComponent */],
        data: {
            title: '简单示例'
        }
    },
    {
        path: 'methods',
        component: __WEBPACK_IMPORTED_MODULE_3__methods_methods_component__["a" /* MethodsComponent */],
        data: {
            title: '调用方法'
        }
    },
    {
        path: 'events',
        component: __WEBPACK_IMPORTED_MODULE_4__events_events_component__["a" /* EventsComponent */],
        data: {
            title: '事件'
        }
    },
];
var AmapMarkerDemoRoutingModule = (function () {
    function AmapMarkerDemoRoutingModule() {
    }
    AmapMarkerDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AmapMarkerDemoRoutingModule);
    return AmapMarkerDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-marker-demo/amap-marker-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapMarkerDemoModule", function() { return AmapMarkerDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/views/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__amap_marker_demo_routing_module__ = __webpack_require__("../../../../../src/app/views/amap-marker-demo/amap-marker-demo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_simple_component__ = __webpack_require__("../../../../../src/app/views/amap-marker-demo/simple/simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__methods_methods_component__ = __webpack_require__("../../../../../src/app/views/amap-marker-demo/methods/methods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_events_component__ = __webpack_require__("../../../../../src/app/views/amap-marker-demo/events/events.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AmapMarkerDemoModule = (function () {
    function AmapMarkerDemoModule() {
    }
    AmapMarkerDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__amap_marker_demo_routing_module__["a" /* AmapMarkerDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__simple_simple_component__["a" /* SimpleComponent */],
                __WEBPACK_IMPORTED_MODULE_5__methods_methods_component__["a" /* MethodsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__events_events_component__["a" /* EventsComponent */]
            ]
        })
    ], AmapMarkerDemoModule);
    return AmapMarkerDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-marker-demo/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\n  <div class=\"card-header\">\n    点标记事件 (请查看console输出)\n  </div>\n  <div class=\"card-body\">\n    <ngx-amap class=\"demo-map\" [resizeEnable]=\"true\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\n      <amap-marker [position]=\"[116.397428, 39.90923]\" [draggable]=\"true\"\n        (ready)=\"onMarkerEvent($event, 'ready')\"\n        (markerClick)=\"onMarkerEvent($event, 'markerClick')\"\n        (dblClick)=\"onMarkerEvent($event, 'dblClick')\"\n        (rightClick)=\"onMarkerEvent($event, 'rightClick')\"\n        (mouseMove)=\"onMarkerEvent($event, 'mouseMove')\"\n        (mouseOver)=\"onMarkerEvent($event, 'mouseOver')\"\n        (mouseOut)=\"onMarkerEvent($event, 'mouseOut')\"\n        (mouseDown)=\"onMarkerEvent($event, 'mouseDown')\"\n        (mouseUp)=\"onMarkerEvent($event, 'mouseUp')\"\n        (dragStart)=\"onMarkerEvent($event, 'dragStart')\"\n        (dragging)=\"onMarkerEvent($event, 'dragging')\"\n        (dragEnd)=\"onMarkerEvent($event, 'dragEnd')\"\n        (touchStart)=\"onMarkerEvent($event, 'touchStart')\"\n        (touchMove)=\"onMarkerEvent($event, 'touchMove')\"\n        (touchEnd)=\"onMarkerEvent($event, 'touchEnd')\"\n        (moving)=\"onMarkerEvent($event, 'moving')\"\n        (moveend)=\"onMarkerEvent($event, 'moveend')\"\n        (movealong)=\"onMarkerEvent($event, 'movealong')\"\n      ></amap-marker>\n    </ngx-amap>\n    <div class=\"mt-3\">\n      <tabset>\n        <tab heading=\"HTML\">\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/views/amap-marker-demo/events/events.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-marker-demo/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = (function () {
    function EventsComponent() {
        this.demo_md_html = "<ngx-amap class=\"demo-map\" [resizeEnable]=\"true\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\n  <amap-marker [position]=\"[116.397428, 39.90923]\" [draggable]=\"true\"\n    (ready)=\"onMarkerEvent($event, 'ready')\"\n    (markerClick)=\"onMarkerEvent($event, 'markerClick')\"\n    (dblClick)=\"onMarkerEvent($event, 'dblClick')\"\n    (rightClick)=\"onMarkerEvent($event, 'rightClick')\"\n    (mouseMove)=\"onMarkerEvent($event, 'mouseMove')\"\n    (mouseOver)=\"onMarkerEvent($event, 'mouseOver')\"\n    (mouseOut)=\"onMarkerEvent($event, 'mouseOut')\"\n    (mouseDown)=\"onMarkerEvent($event, 'mouseDown')\"\n    (mouseUp)=\"onMarkerEvent($event, 'mouseUp')\"\n    (dragStart)=\"onMarkerEvent($event, 'dragStart')\"\n    (dragging)=\"onMarkerEvent($event, 'dragging')\"\n    (dragEnd)=\"onMarkerEvent($event, 'dragEnd')\"\n    (touchStart)=\"onMarkerEvent($event, 'touchStart')\"\n    (touchMove)=\"onMarkerEvent($event, 'touchMove')\"\n    (touchEnd)=\"onMarkerEvent($event, 'touchEnd')\"\n    (moving)=\"onMarkerEvent($event, 'moving')\"\n    (moveend)=\"onMarkerEvent($event, 'moveend')\"\n    (movealong)=\"onMarkerEvent($event, 'movealong')\"\n  ></amap-marker>\n</ngx-amap>\n";
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent.prototype.onMarkerEvent = function (event, type) {
        console.log('marker event:', type, event);
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__("../../../../../src/app/views/amap-marker-demo/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-marker-demo/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-marker-demo/methods/methods.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\r\n  <div class=\"card-header\">\r\n    调用方法示例：轨迹回放\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <button class=\"btn btn-outline-primary\" (click)=\"startMove()\">开始动画</button>\r\n    <button class=\"btn btn-outline-primary\" (click)=\"pauseMove()\">暂停动画</button>\r\n    <button class=\"btn btn-outline-primary\" (click)=\"resumeMove()\">继续动画</button>\r\n    <button class=\"btn btn-outline-primary\" (click)=\"stopMove()\">停止动画</button>\r\n    <hr>\r\n    <ngx-amap #map class=\"demo-map\" [resizeEnable]=\"true\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"17\">\r\n      <amap-marker\r\n        [position]=\"[116.397428, 39.90923]\"\r\n        icon=\"http://webapi.amap.com/images/car.png\"\r\n        [offset]=\"{x:-26,y:-13}\"\r\n        [autoRotation]=\"true\"\r\n        (moving)=\"passedPath = $event.passedPath\"\r\n        (ready)=\"onMarkerReady(map)\">\r\n      </amap-marker>\r\n      <amap-polyline\r\n        [path]=\"lineArr\"\r\n        [strokeColor]=\"'#00A'\"\r\n        [strokeWeight]=\"3\">\r\n      </amap-polyline>\r\n      <amap-polyline\r\n        [path]=\"passedPath\"\r\n        [strokeColor]=\"'#F00'\"\r\n        [strokeWeight]=\"3\">\r\n      </amap-polyline>\r\n    </ngx-amap>\r\n    <div class=\"mt-3\">\r\n      <tabset>\r\n        <tab heading=\"HTML\">\r\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"Component\">\r\n          <markdown [data]=\"demo_md_ts | language: 'typescript'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"支持的方法\">\r\n          <markdown>\r\n          ```typescript\r\n          show()\r\n          hide()\r\n          moveTo(position: ILngLat, speed: number, f?: (k: any) => any)\r\n          moveAlong(path: ILngLat[], speed: number, f?: (k: any) => any)\r\n          stopMove()\r\n          pauseMove()\r\n          resumeMove()\r\n          setOffset(offset: IPixel)\r\n          setIcon(icon: string|IIcon)\r\n          setShadow(shadow: IIcon)\r\n          setLabel(label: ILabel)\r\n          setDraggable(draggable: boolean)\r\n          setClickable(clickable: boolean)\r\n          setPosition(position: LngLat)\r\n          setAngle(angle: number)\r\n          setzIndex(zIndex: number)\r\n          setContent(content: any)\r\n          setTitle(title: string)\r\n          setCursor(cursor: string)\r\n          setTop(isTop: boolean)\r\n          setExtData(data: any)\r\n          setShape(shape: any)\r\n          setAnimation(animation: string)\r\n          getOffset()\r\n          getPosition()\r\n          getLabel()\r\n          getAngle()\r\n          getzIndex()\r\n          getIcon()\r\n          getContent()\r\n          getTitle()\r\n          getTop()\r\n          getShadow()\r\n          getShape()\r\n          getExtData()\r\n          getMap()\r\n          getAnimation()\r\n          getClickable()\r\n          getDraggable()\r\n          ```\r\n          </markdown>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/amap-marker-demo/methods/methods.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-marker-demo/methods/methods.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MethodsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_amap__ = __webpack_require__("../../../../../dist/ngx-amap/ngx-amap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MethodsComponent = (function () {
    function MethodsComponent() {
        this.demo_md_html = "<button class=\"btn btn-outline-primary\" (click)=\"startMove()\">\u5F00\u59CB\u52A8\u753B</button>\n<button class=\"btn btn-outline-primary\" (click)=\"pauseMove()\">\u6682\u505C\u52A8\u753B</button>\n<button class=\"btn btn-outline-primary\" (click)=\"resumeMove()\">\u7EE7\u7EED\u52A8\u753B</button>\n<button class=\"btn btn-outline-primary\" (click)=\"stopMove()\">\u505C\u6B62\u52A8\u753B</button>\n<hr>\n<ngx-amap #map class=\"demo-map\" [resizeEnable]=\"true\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"17\">\n  <amap-marker\n    [position]=\"[116.397428, 39.90923]\"\n    icon=\"http://webapi.amap.com/images/car.png\"\n    [offset]=\"{x:-26,y:-13}\"\n    [autoRotation]=\"true\"\n    (moving)=\"passedPath = $event.passedPath\"\n    (ready)=\"onMarkerReady(map)\">\n  </amap-marker>\n  <amap-polyline\n    [path]=\"lineArr\"\n    [strokeColor]=\"'#00A'\"\n    [strokeWeight]=\"3\">\n  </amap-polyline>\n  <amap-polyline\n    [path]=\"passedPath\"\n    [strokeColor]=\"'#F00'\"\n    [strokeWeight]=\"3\">\n  </amap-polyline>\n</ngx-amap>\n";
        this.demo_md_ts = "import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';\nimport { AmapMarkerDirective } from 'ngx-amap';\n\n@Component({\n  selector: 'app-methods',\n  templateUrl: './methods.component.html',\n  styleUrls: ['./methods.component.scss']\n})\nexport class MethodsComponent implements OnInit, AfterViewInit {\n  lineArr: number[][];\n  passedPath: number[][];\n  car: AmapMarkerDirective;\n\n  @ViewChildren(AmapMarkerDirective) markers: QueryList<AmapMarkerDirective>;\n\n  constructor() { }\n\n  ngOnInit() {\n    this.lineArr = [];\n    let lngX = 116.397428, latY = 39.90923;\n    this.lineArr.push([lngX, latY]);\n    for (let i = 1; i < 4; i++) {\n        lngX = lngX + Math.random() * 0.05;\n        if (i % 2) {\n            latY = latY + Math.random() * 0.0001;\n        } else {\n            latY = latY + Math.random() * 0.06;\n        }\n        this.lineArr.push([lngX, latY]);\n    }\n  }\n\n  ngAfterViewInit() {\n    this.car = this.markers.last;\n  }\n\n  startMove() {\n    this.car.moveAlong(this.lineArr, 500);\n  }\n\n  pauseMove() {\n    this.car.pauseMove();\n  }\n\n  resumeMove() {\n    this.car.resumeMove();\n  }\n\n  stopMove() {\n    this.car.stopMove();\n  }\n\n  onMarkerReady(map: any) {\n    map.setFitView();\n  }\n}\n";
    }
    MethodsComponent.prototype.ngOnInit = function () {
        this.lineArr = [];
        var lngX = 116.397428, latY = 39.90923;
        this.lineArr.push([lngX, latY]);
        for (var i = 1; i < 4; i++) {
            lngX = lngX + Math.random() * 0.05;
            if (i % 2) {
                latY = latY + Math.random() * 0.0001;
            }
            else {
                latY = latY + Math.random() * 0.06;
            }
            this.lineArr.push([lngX, latY]);
        }
    };
    MethodsComponent.prototype.ngAfterViewInit = function () {
        this.car = this.markers.last;
    };
    MethodsComponent.prototype.startMove = function () {
        this.car.moveAlong(this.lineArr, 500);
    };
    MethodsComponent.prototype.pauseMove = function () {
        this.car.pauseMove();
    };
    MethodsComponent.prototype.resumeMove = function () {
        this.car.resumeMove();
    };
    MethodsComponent.prototype.stopMove = function () {
        this.car.stopMove();
    };
    MethodsComponent.prototype.onMarkerReady = function (map) {
        map.setFitView();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ngx_amap__["a" /* AmapMarkerDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */])
    ], MethodsComponent.prototype, "markers", void 0);
    MethodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-methods',
            template: __webpack_require__("../../../../../src/app/views/amap-marker-demo/methods/methods.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-marker-demo/methods/methods.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MethodsComponent);
    return MethodsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-marker-demo/simple/simple.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\r\n  <div class=\"card-header\">\r\n    简单示例\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <button class=\"btn btn-outline-primary\" (click)=\"hidden = !hidden\">显示/隐藏 点标记</button>\r\n    <button class=\"btn btn-outline-primary\" (click)=\"toggleIcon()\">切换自定义图标</button>\r\n    <button class=\"btn btn-outline-primary\" (click)=\"toggleLabel()\">切换自定义文本标签</button>\r\n    <hr>\r\n    <ngx-amap class=\"demo-map\" [resizeEnable]=\"true\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\r\n      <amap-marker [position]=\"[116.397428, 39.90923]\" [hidden]=\"hidden\" [icon]=\"icon\" [label]=\"label\"></amap-marker>\r\n    </ngx-amap>\r\n    <div class=\"mt-3\">\r\n      <tabset>\r\n        <tab heading=\"HTML\">\r\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"Component\">\r\n          <markdown [data]=\"demo_md_ts | language: 'typescript'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"支持的Input\">\r\n          <markdown>\r\n            ```typescript\r\n            // MarkerOptions:\r\n            position: LngLat;\r\n            offset: IPixel;\r\n            icon: string|IIcon;\r\n            content: any;\r\n            topWhenClick: boolean;\r\n            bubble: boolean;\r\n            draggable: boolean;\r\n            raiseOnDrag: boolean;\r\n            cursor: string;\r\n            visible: boolean;\r\n            zIndex: number;\r\n            angle: number;\r\n            autoRotation: boolean;\r\n            shadow: IIcon;\r\n            title: string;\r\n            clickable: boolean;\r\n            shape: any;\r\n            extData: any;\r\n            label: ILabel;\r\n            \r\n            // Extra Options:\r\n            isTop: boolean;\r\n            animation: string;\r\n            hidden: boolean;\r\n            openInfoWindow: boolean;\r\n            ```\r\n          </markdown>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/amap-marker-demo/simple/simple.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-marker-demo/simple/simple.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleComponent = (function () {
    function SimpleComponent() {
        this.hidden = false;
        this.demo_md_html = "<button class=\"btn btn-outline-primary\" (click)=\"hidden = !hidden\">\u663E\u793A/\u9690\u85CF \u70B9\u6807\u8BB0</button>\n<button class=\"btn btn-outline-primary\" (click)=\"toggleIcon()\">\u5207\u6362\u81EA\u5B9A\u4E49\u56FE\u6807</button>\n<button class=\"btn btn-outline-primary\" (click)=\"toggleLabel()\">\u5207\u6362\u81EA\u5B9A\u4E49\u6587\u672C\u6807\u7B7E</button>\n<hr>\n<ngx-amap class=\"demo-map\" [resizeEnable]=\"true\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\n  <amap-marker [position]=\"[116.397428, 39.90923]\" [hidden]=\"hidden\" [icon]=\"icon\" [label]=\"label\"></amap-marker>\n</ngx-amap>\n";
        this.demo_md_ts = "import { Component, OnInit } from '@angular/core';\nimport { IIcon, ILabel } from 'ngx-amap/types/interface';\n\n@Component({\n  selector: 'app-simple',\n  templateUrl: './simple.component.html',\n  styleUrls: ['./simple.component.scss']\n})\nexport class SimpleComponent implements OnInit {\n  hidden = false;\n  icon: IIcon;\n  label: ILabel;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  toggleIcon() {\n    this.icon = this.icon ? null : {\n      size: {\n        width: 40,\n        height: 50\n      },\n      image: 'http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',\n      imageOffset: {\n        x: 0,\n        y: -60\n      }\n    };\n  }\n\n  toggleLabel() {\n    this.label = this.label ? null : {\n      offset: {\n        x: 20,\n        y: 20\n      },\n      content: '\u6211\u662Fmarker\u7684label\u6807\u7B7E'\n    };\n  }\n}\n";
    }
    SimpleComponent.prototype.ngOnInit = function () {
    };
    SimpleComponent.prototype.toggleIcon = function () {
        this.icon = this.icon ? null : {
            size: {
                width: 40,
                height: 50
            },
            image: 'http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',
            imageOffset: {
                x: 0,
                y: -60
            }
        };
    };
    SimpleComponent.prototype.toggleLabel = function () {
        this.label = this.label ? null : {
            offset: {
                x: 20,
                y: 20
            },
            content: '我是marker的label标签'
        };
    };
    SimpleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simple',
            template: __webpack_require__("../../../../../src/app/views/amap-marker-demo/simple/simple.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-marker-demo/simple/simple.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleComponent);
    return SimpleComponent;
}());



/***/ })

});
//# sourceMappingURL=amap-marker-demo.module.chunk.js.map