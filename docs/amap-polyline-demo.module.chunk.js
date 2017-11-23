webpackJsonp(["amap-polyline-demo.module"],{

/***/ "../../../../../src/app/views/amap-polyline-demo/amap-polyline-demo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmapPolylineDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_simple_component__ = __webpack_require__("../../../../../src/app/views/amap-polyline-demo/simple/simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__methods_methods_component__ = __webpack_require__("../../../../../src/app/views/amap-polyline-demo/methods/methods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events_component__ = __webpack_require__("../../../../../src/app/views/amap-polyline-demo/events/events.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: '/amap-polyline/simple',
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
        },
    },
    {
        path: 'events',
        component: __WEBPACK_IMPORTED_MODULE_4__events_events_component__["a" /* EventsComponent */],
        data: {
            title: '事件'
        },
    },
];
var AmapPolylineDemoRoutingModule = (function () {
    function AmapPolylineDemoRoutingModule() {
    }
    AmapPolylineDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AmapPolylineDemoRoutingModule);
    return AmapPolylineDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-polyline-demo/amap-polyline-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapPolylineDemoModule", function() { return AmapPolylineDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/views/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__amap_polyline_demo_routing_module__ = __webpack_require__("../../../../../src/app/views/amap-polyline-demo/amap-polyline-demo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_simple_component__ = __webpack_require__("../../../../../src/app/views/amap-polyline-demo/simple/simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__methods_methods_component__ = __webpack_require__("../../../../../src/app/views/amap-polyline-demo/methods/methods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_events_component__ = __webpack_require__("../../../../../src/app/views/amap-polyline-demo/events/events.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AmapPolylineDemoModule = (function () {
    function AmapPolylineDemoModule() {
    }
    AmapPolylineDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__amap_polyline_demo_routing_module__["a" /* AmapPolylineDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__simple_simple_component__["a" /* SimpleComponent */],
                __WEBPACK_IMPORTED_MODULE_5__methods_methods_component__["a" /* MethodsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__events_events_component__["a" /* EventsComponent */]
            ]
        })
    ], AmapPolylineDemoModule);
    return AmapPolylineDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-polyline-demo/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\r\n  <div class=\"card-header\">\r\n    折线事件 (请查看console输出)\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"hide = !hide\">触发显示隐藏事件</button>\r\n    <hr>\r\n    <ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\r\n      <amap-polyline [options]=\"lineOptions\" [hidden]=\"hide\"\r\n        (polylineClick)=\"onPolylineEvent($event, 'polylineClick')\"\r\n        (ready)=\"onPolylineEvent($event, 'ready')\"\r\n        (dblClick)=\"onPolylineEvent($event, 'dblClick')\"\r\n        (rightClick)=\"onPolylineEvent($event, 'rightClick')\"\r\n        (polylineHide)=\"onPolylineEvent($event, 'polylineHide')\"\r\n        (polylineShow)=\"onPolylineEvent($event, 'polylineShow')\"\r\n        (mouseDown)=\"onPolylineEvent($event, 'mouseDown')\"\r\n        (mouseUp)=\"onPolylineEvent($event, 'mouseUp')\"\r\n        (mouseOver)=\"onPolylineEvent($event, 'mouseOver')\"\r\n        (mouseOut)=\"onPolylineEvent($event, 'mouseOut')\"\r\n        (change)=\"onPolylineEvent($event, 'change')\"\r\n        (touchStart)=\"onPolylineEvent($event, 'touchStart')\"\r\n        (touchMove)=\"onPolylineEvent($event, 'touchMove')\"\r\n        (touchEnd)=\"onPolylineEvent($event, 'touchEnd')\"\r\n      ></amap-polyline>\r\n    </ngx-amap>\r\n    <div class=\"mt-3\">\r\n      <tabset>\r\n        <tab heading=\"HTML\">\r\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"Component\">\r\n          <markdown [data]=\"demo_md_ts | language: 'typescript'\"></markdown>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/amap-polyline-demo/events/events.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-polyline-demo/events/events.component.ts":
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
        this.demo_md_html = "<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"hide = !hide\">\u89E6\u53D1\u663E\u793A\u9690\u85CF\u4E8B\u4EF6</button>\n<hr>\n<ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\n  <amap-polyline [options]=\"lineOptions\" [hidden]=\"hide\"\n    (polylineClick)=\"onPolylineEvent($event, 'polylineClick')\"\n    (ready)=\"onPolylineEvent($event, 'ready')\"\n    (dblClick)=\"onPolylineEvent($event, 'dblClick')\"\n    (rightClick)=\"onPolylineEvent($event, 'rightClick')\"\n    (polylineHide)=\"onPolylineEvent($event, 'polylineHide')\"\n    (polylineShow)=\"onPolylineEvent($event, 'polylineShow')\"\n    (mouseDown)=\"onPolylineEvent($event, 'mouseDown')\"\n    (mouseUp)=\"onPolylineEvent($event, 'mouseUp')\"\n    (mouseOver)=\"onPolylineEvent($event, 'mouseOver')\"\n    (mouseOut)=\"onPolylineEvent($event, 'mouseOut')\"\n    (change)=\"onPolylineEvent($event, 'change')\"\n    (touchStart)=\"onPolylineEvent($event, 'touchStart')\"\n    (touchMove)=\"onPolylineEvent($event, 'touchMove')\"\n    (touchEnd)=\"onPolylineEvent($event, 'touchEnd')\"\n  ></amap-polyline>\n</ngx-amap>\n";
        this.demo_md_ts = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-events',\n  templateUrl: './events.component.html',\n  styleUrls: ['./events.component.scss']\n})\nexport class EventsComponent implements OnInit {\n  hide = false;\n  lineOptions = {\n    path: [\n      [116.368904, 39.913423],\n      [116.382122, 39.901176],\n      [116.387271, 39.912501],\n      [116.398258, 39.904600]\n    ],                        // \u8BBE\u7F6E\u7EBF\u8986\u76D6\u7269\u8DEF\u5F84\n    strokeColor: '#3366FF',   // \u7EBF\u989C\u8272\n    strokeOpacity: 1,         // \u7EBF\u900F\u660E\u5EA6\n    strokeWeight: 5,          // \u7EBF\u5BBD\n    strokeStyle: 'solid',     // \u7EBF\u6837\u5F0F\n    strokeDasharray: [10, 5]  // \u8865\u5145\u7EBF\u6837\u5F0F\n  };\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  onPolylineEvent(event: any, type: string) {\n    console.log('polyline event:', type, event);\n  }\n}\n";
        this.hide = false;
        this.lineOptions = {
            path: [
                [116.368904, 39.913423],
                [116.382122, 39.901176],
                [116.387271, 39.912501],
                [116.398258, 39.904600]
            ],
            strokeColor: '#3366FF',
            strokeOpacity: 1,
            strokeWeight: 5,
            strokeStyle: 'solid',
            strokeDasharray: [10, 5] // 补充线样式
        };
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent.prototype.onPolylineEvent = function (event, type) {
        console.log('polyline event:', type, event);
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__("../../../../../src/app/views/amap-polyline-demo/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-polyline-demo/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-polyline-demo/methods/methods.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\r\n  <div class=\"card-header\">\r\n    调用方法示例 (请查看console输出)\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"getMethods()\">调用Getter方法</button>\r\n    <hr>\r\n    <ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\r\n      <amap-polyline\r\n        [path]=\"lineArr\"\r\n        [strokeColor]=\"'#3366FF'\"\r\n        [strokeOpacity]=\"1\"\r\n        [strokeWeight]=\"5\"\r\n        [strokeStyle]=\"'solid'\"\r\n        [strokeDasharray]=\"[10, 5]\">\r\n      </amap-polyline>\r\n    </ngx-amap>\r\n    <div class=\"mt-3\">\r\n      <tabset>\r\n        <tab heading=\"HTML\">\r\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"Component\">\r\n          <markdown [data]=\"demo_md_ts | language: 'typescript'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"支持的方法\">\r\n          <markdown>\r\n            ```typescript\r\n            show()\r\n            hide()\r\n            setPath(path: number[][])\r\n            setOptions(opt: PolylineOptions)\r\n            setExtData(ext: any)\r\n            getPath()\r\n            getOptions()\r\n            getLength()\r\n            getBounds()\r\n            getExtData()\r\n            ```\r\n          </markdown>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/amap-polyline-demo/methods/methods.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-polyline-demo/methods/methods.component.ts":
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
        this.demo_md_html = "<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"getMethods()\">\u8C03\u7528Getter\u65B9\u6CD5</button>\n<hr>\n<ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\n  <amap-polyline\n    [path]=\"lineArr\"\n    [strokeColor]=\"'#3366FF'\"\n    [strokeOpacity]=\"1\"\n    [strokeWeight]=\"5\"\n    [strokeStyle]=\"'solid'\"\n    [strokeDasharray]=\"[10, 5]\">\n  </amap-polyline>\n</ngx-amap>\n";
        this.demo_md_ts = "\nimport { Component, OnInit, ViewChild } from '@angular/core';\nimport { AmapPolylineDirective } from 'ngx-amap';\n\n@Component({\n  selector: 'app-methods',\n  templateUrl: './methods.component.html',\n  styleUrls: ['./methods.component.scss']\n})\nexport class MethodsComponent implements OnInit {\n  @ViewChild(AmapPolylineDirective) polyline: AmapPolylineDirective;\n\n  lineArr = [\n    [116.368904, 39.913423],\n    [116.382122, 39.901176],\n    [116.387271, 39.912501],\n    [116.398258, 39.904600]\n  ];\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  getMethods() {\n    if (this.polyline) {\n      this.polyline.getOptions().then(v => console.log('getOptions():', v));\n      this.polyline.getPath().then(v => console.log('getPath():', v));\n      this.polyline.getLength().then(v => console.log('getLength():', v));\n      this.polyline.getBounds().then(v => console.log('getBounds():', v));\n      this.polyline.getExtData().then(v => console.log('getExtData():', v));\n    }\n  }\n}\n";
        this.lineArr = [
            [116.368904, 39.913423],
            [116.382122, 39.901176],
            [116.387271, 39.912501],
            [116.398258, 39.904600]
        ];
    }
    MethodsComponent.prototype.ngOnInit = function () {
    };
    MethodsComponent.prototype.getMethods = function () {
        if (this.polyline) {
            this.polyline.getOptions().then(function (v) { return console.log('getOptions():', v); });
            this.polyline.getPath().then(function (v) { return console.log('getPath():', v); });
            this.polyline.getLength().then(function (v) { return console.log('getLength():', v); });
            this.polyline.getBounds().then(function (v) { return console.log('getBounds():', v); });
            this.polyline.getExtData().then(function (v) { return console.log('getExtData():', v); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ngx_amap__["b" /* AmapPolylineDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_amap__["b" /* AmapPolylineDirective */])
    ], MethodsComponent.prototype, "polyline", void 0);
    MethodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-methods',
            template: __webpack_require__("../../../../../src/app/views/amap-polyline-demo/methods/methods.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-polyline-demo/methods/methods.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MethodsComponent);
    return MethodsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-polyline-demo/simple/simple.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\r\n  <div class=\"card-header\">\r\n    简单示例\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\r\n      <amap-polyline\r\n        [path]=\"lineArr\"\r\n        [strokeColor]=\"'#3366FF'\"\r\n        [strokeOpacity]=\"1\"\r\n        [strokeWeight]=\"5\"\r\n        [strokeStyle]=\"'solid'\"\r\n        [strokeDasharray]=\"[10, 5]\">\r\n      </amap-polyline>\r\n    </ngx-amap>\r\n    <div class=\"mt-3\">\r\n      <tabset>\r\n        <tab heading=\"HTML\">\r\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"Component\">\r\n          <markdown [data]=\"demo_md_ts | language: 'typescript'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"支持的Input\">\r\n          <markdown>\r\n            ```typescript\r\n            // PolylineOptions:\r\n            zIndex: number;\r\n            bubble: boolean;\r\n            geodesic: boolean;\r\n            isOutline: boolean;\r\n            borderWeight: number;\r\n            outlineColor: string;\r\n            path: number[][];\r\n            strokeColor: string;\r\n            strokeOpacity: number;\r\n            strokeWeight: number;\r\n            strokeStyle: string;\r\n            strokeDasharray: number[];\r\n            lineJoin: string;\r\n            extData: any;\r\n            showDir: boolean;\r\n\r\n            // This options property will override other property:\r\n            options: PolylineOptions;\r\n            \r\n            // Extra Options:\r\n            hidden: boolean;\r\n            ```\r\n          </markdown>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/amap-polyline-demo/simple/simple.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-polyline-demo/simple/simple.component.ts":
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
        this.demo_md_html = "<ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\n  <amap-polyline\n    [path]=\"lineArr\"\n    [strokeColor]=\"'#3366FF'\"\n    [strokeOpacity]=\"1\"\n    [strokeWeight]=\"5\"\n    [strokeStyle]=\"'solid'\"\n    [strokeDasharray]=\"[10, 5]\">\n  </amap-polyline>\n</ngx-amap>\n";
        this.demo_md_ts = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-simple',\n  templateUrl: './simple.component.html',\n  styleUrls: ['./simple.component.scss']\n})\nexport class SimpleComponent implements OnInit {\n  lineArr = [\n    [116.368904, 39.913423],\n    [116.382122, 39.901176],\n    [116.387271, 39.912501],\n    [116.398258, 39.904600]\n  ];\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n";
        this.lineArr = [
            [116.368904, 39.913423],
            [116.382122, 39.901176],
            [116.387271, 39.912501],
            [116.398258, 39.904600]
        ];
    }
    SimpleComponent.prototype.ngOnInit = function () {
    };
    SimpleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simple',
            template: __webpack_require__("../../../../../src/app/views/amap-polyline-demo/simple/simple.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-polyline-demo/simple/simple.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleComponent);
    return SimpleComponent;
}());



/***/ })

});
//# sourceMappingURL=amap-polyline-demo.module.chunk.js.map