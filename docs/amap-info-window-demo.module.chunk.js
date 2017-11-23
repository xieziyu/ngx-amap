webpackJsonp(["amap-info-window-demo.module"],{

/***/ "../../../../../src/app/views/amap-info-window-demo/amap-info-window-demo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmapInfoWindowDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_simple_component__ = __webpack_require__("../../../../../src/app/views/amap-info-window-demo/simple/simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__methods_methods_component__ = __webpack_require__("../../../../../src/app/views/amap-info-window-demo/methods/methods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events_component__ = __webpack_require__("../../../../../src/app/views/amap-info-window-demo/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inside_marker_inside_marker_component__ = __webpack_require__("../../../../../src/app/views/amap-info-window-demo/inside-marker/inside-marker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: '/amap-info-window/simple',
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
        path: 'inside-marker',
        component: __WEBPACK_IMPORTED_MODULE_5__inside_marker_inside_marker_component__["a" /* InsideMarkerComponent */],
        data: {
            title: '用在amap-marker内部'
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
var AmapInfoWindowDemoRoutingModule = (function () {
    function AmapInfoWindowDemoRoutingModule() {
    }
    AmapInfoWindowDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AmapInfoWindowDemoRoutingModule);
    return AmapInfoWindowDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/amap-info-window-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapInfoWindowDemoModule", function() { return AmapInfoWindowDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/views/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__amap_info_window_demo_routing_module__ = __webpack_require__("../../../../../src/app/views/amap-info-window-demo/amap-info-window-demo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_simple_component__ = __webpack_require__("../../../../../src/app/views/amap-info-window-demo/simple/simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__methods_methods_component__ = __webpack_require__("../../../../../src/app/views/amap-info-window-demo/methods/methods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_events_component__ = __webpack_require__("../../../../../src/app/views/amap-info-window-demo/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inside_marker_inside_marker_component__ = __webpack_require__("../../../../../src/app/views/amap-info-window-demo/inside-marker/inside-marker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AmapInfoWindowDemoModule = (function () {
    function AmapInfoWindowDemoModule() {
    }
    AmapInfoWindowDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__amap_info_window_demo_routing_module__["a" /* AmapInfoWindowDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__simple_simple_component__["a" /* SimpleComponent */], __WEBPACK_IMPORTED_MODULE_5__methods_methods_component__["a" /* MethodsComponent */], __WEBPACK_IMPORTED_MODULE_6__events_events_component__["a" /* EventsComponent */], __WEBPACK_IMPORTED_MODULE_7__inside_marker_inside_marker_component__["a" /* InsideMarkerComponent */]]
        })
    ], AmapInfoWindowDemoModule);
    return AmapInfoWindowDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\r\n  <div class=\"card-header\">\r\n    信息窗体事件 (请查看console输出)\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"open = !open\">触发显示隐藏事件</button>\r\n    <hr>\r\n    <ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\">\r\n      <amap-info-window #infoWindow [(isOpen)]=\"open\" [position]=\"[116.397428, 39.90923]\"\r\n        (windowOpen)=\"onInfoWindowEvent($event, 'windowOpen')\"\r\n        (windowClose)=\"onInfoWindowEvent($event, 'windowClose')\"\r\n        (windowChange)=\"onInfoWindowEvent($event, 'windowChange')\"\r\n      >\r\n        我还是一个简单的信息窗体\r\n      </amap-info-window>\r\n    </ngx-amap>\r\n    <div class=\"mt-3\">\r\n      <tabset>\r\n        <tab heading=\"HTML\">\r\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"Component\">\r\n          <markdown [data]=\"demo_md_ts | language: 'typescript'\"></markdown>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/events/events.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/events/events.component.ts":
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
        this.demo_md_html = "<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"open = !open\">\u89E6\u53D1\u663E\u793A\u9690\u85CF\u4E8B\u4EF6</button>\n<hr>\n<ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\">\n  <amap-info-window #infoWindow [(isOpen)]=\"open\" [position]=\"[116.397428, 39.90923]\"\n    (windowOpen)=\"onInfoWindowEvent($event, 'windowOpen')\"\n    (windowClose)=\"onInfoWindowEvent($event, 'windowClose')\"\n    (windowChange)=\"onInfoWindowEvent($event, 'windowChange')\"\n  >\n    \u6211\u8FD8\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4FE1\u606F\u7A97\u4F53\n  </amap-info-window>\n</ngx-amap>\n";
        this.demo_md_ts = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-events',\n  templateUrl: './events.component.html',\n  styleUrls: ['./events.component.scss']\n})\nexport class EventsComponent implements OnInit {\n  open = true;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  onInfoWindowEvent(event: any, type: string) {\n    console.log('info-window event:', type, event);\n  }\n}\n";
        this.open = true;
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent.prototype.onInfoWindowEvent = function (event, type) {
        console.log('info-window event:', type, event);
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__("../../../../../src/app/views/amap-info-window-demo/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-info-window-demo/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/inside-marker/inside-marker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\r\n  <div class=\"card-header\">\r\n    用在 amap-marker 内部，点击Marker联动\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\r\n      <amap-marker *ngFor=\"let marker of markers; index as i\" [position]=\"marker\">\r\n        <amap-info-window [offset]=\"infoWindowOffset\">\r\n          我是第 <span class=\"text-danger\">{{i+1}}</span> 个marker\r\n        </amap-info-window>\r\n      </amap-marker>\r\n    </ngx-amap>\r\n    <div class=\"mt-3\">\r\n      <tabset>\r\n        <tab heading=\"HTML\">\r\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"Component\">\r\n          <markdown [data]=\"demo_md_ts | language: 'typescript'\"></markdown>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/inside-marker/inside-marker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/inside-marker/inside-marker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsideMarkerComponent; });
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

var InsideMarkerComponent = (function () {
    function InsideMarkerComponent() {
        this.demo_md_html = "<ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\n  <amap-marker *ngFor=\"let marker of markers; index as i\" [position]=\"marker\">\n    <amap-info-window [offset]=\"infoWindowOffset\">\n      \u6211\u662F\u7B2C <span class=\"text-danger\">{{i+1}}</span> \u4E2Amarker\n    </amap-info-window>\n  </amap-marker>\n</ngx-amap>\n";
        this.demo_md_ts = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-inside-marker',\n  templateUrl: './inside-marker.component.html',\n  styleUrls: ['./inside-marker.component.scss']\n})\nexport class InsideMarkerComponent implements OnInit {\n  markers = [\n    [116.368904, 39.923423],\n    [116.382122, 39.921176],\n    [116.387271, 39.922501],\n    [116.398258, 39.914600]\n  ];\n\n  infoWindowOffset = {\n    x: 0,\n    y: -30\n  };\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n";
        this.markers = [
            [116.368904, 39.923423],
            [116.382122, 39.921176],
            [116.387271, 39.922501],
            [116.398258, 39.914600]
        ];
        this.infoWindowOffset = {
            x: 0,
            y: -30
        };
    }
    InsideMarkerComponent.prototype.ngOnInit = function () {
    };
    InsideMarkerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inside-marker',
            template: __webpack_require__("../../../../../src/app/views/amap-info-window-demo/inside-marker/inside-marker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-info-window-demo/inside-marker/inside-marker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InsideMarkerComponent);
    return InsideMarkerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/methods/methods.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\r\n  <div class=\"card-header\">\r\n    调用方法示例 (请查看console输出)\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"getMethods(infoWindow)\">调用Getter方法</button>\r\n    <hr>\r\n    <ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\">\r\n      <amap-info-window #infoWindow [isOpen]=\"true\" [position]=\"[116.397428, 39.90923]\">\r\n        我还是一个简单的信息窗体\r\n      </amap-info-window>\r\n    </ngx-amap>\r\n    <div class=\"mt-3\">\r\n      <tabset>\r\n        <tab heading=\"HTML\">\r\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"Component\">\r\n          <markdown [data]=\"demo_md_ts | language: 'typescript'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"支持的方法\">\r\n          <markdown>\r\n            ```typescript\r\n            open(position?: ILngLat)\r\n            close()\r\n            setContent(content: any)\r\n            setPosition(position: ILngLat)\r\n            setSize(size: ISize)\r\n            getIsOpen()\r\n            getContent()\r\n            getPosition()\r\n            getSize()\r\n            ```\r\n          </markdown>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/methods/methods.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/methods/methods.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MethodsComponent; });
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

var MethodsComponent = (function () {
    function MethodsComponent() {
        this.demo_md_html = "<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"getMethods(infoWindow)\">\u8C03\u7528Getter\u65B9\u6CD5</button>\n<hr>\n<ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\">\n  <amap-info-window #infoWindow [isOpen]=\"true\" [position]=\"[116.397428, 39.90923]\">\n    \u6211\u8FD8\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4FE1\u606F\u7A97\u4F53\n  </amap-info-window>\n</ngx-amap>\n";
        this.demo_md_ts = "import { Component, OnInit } from '@angular/core';\nimport { AmapInfoWindowComponent } from 'ngx-amap';\n\n@Component({\n  selector: 'app-methods',\n  templateUrl: './methods.component.html',\n  styleUrls: ['./methods.component.scss']\n})\nexport class MethodsComponent implements OnInit {\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  getMethods(infoWindow: AmapInfoWindowComponent) {\n    if (infoWindow) {\n      infoWindow.getIsOpen().then(v => console.log('getIsOpen():', v));\n      infoWindow.getContent().then(v => console.log('getContent():', v));\n      infoWindow.getPosition().then(v => console.log('getPosition():', v));\n      infoWindow.getSize().then(v => console.log('getSize():', v));\n    }\n  }\n}\n";
    }
    MethodsComponent.prototype.ngOnInit = function () {
    };
    MethodsComponent.prototype.getMethods = function (infoWindow) {
        if (infoWindow) {
            infoWindow.getIsOpen().then(function (v) { return console.log('getIsOpen():', v); });
            infoWindow.getContent().then(function (v) { return console.log('getContent():', v); });
            infoWindow.getPosition().then(function (v) { return console.log('getPosition():', v); });
            infoWindow.getSize().then(function (v) { return console.log('getSize():', v); });
        }
    };
    MethodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-methods',
            template: __webpack_require__("../../../../../src/app/views/amap-info-window-demo/methods/methods.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-info-window-demo/methods/methods.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MethodsComponent);
    return MethodsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/simple/simple.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\r\n  <div class=\"card-header\">\r\n    简单示例\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <button class=\"btn btn-outline-primary\" (click)=\"open = !open\">显示/隐藏 信息窗体</button>\r\n    <hr>\r\n    <ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\">\r\n      <amap-info-window [(isOpen)]=\"open\" [position]=\"[116.397428, 39.90923]\">\r\n        我是一个简单的信息窗体\r\n      </amap-info-window>\r\n    </ngx-amap>\r\n    <div class=\"mt-3\">\r\n      <tabset>\r\n        <tab heading=\"HTML\">\r\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/simple/simple.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-info-window-demo/simple/simple.component.ts":
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
        this.demo_md_html = "<button class=\"btn btn-outline-primary\" (click)=\"open = !open\">\u663E\u793A/\u9690\u85CF \u4FE1\u606F\u7A97\u4F53</button>\n<hr>\n<ngx-amap class=\"demo-map\" [center]=\"[116.397428, 39.90923]\">\n  <amap-info-window [(isOpen)]=\"open\" [position]=\"[116.397428, 39.90923]\">\n    \u6211\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4FE1\u606F\u7A97\u4F53\n  </amap-info-window>\n</ngx-amap>\n";
        this.open = true;
    }
    SimpleComponent.prototype.ngOnInit = function () {
    };
    SimpleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simple',
            template: __webpack_require__("../../../../../src/app/views/amap-info-window-demo/simple/simple.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-info-window-demo/simple/simple.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleComponent);
    return SimpleComponent;
}());



/***/ })

});
//# sourceMappingURL=amap-info-window-demo.module.chunk.js.map