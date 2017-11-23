webpackJsonp(["ngx-amap-demo.module"],{

/***/ "../../../../../src/app/views/ngx-amap-demo/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\n  <div class=\"card-header\">\n    地图事件 (请查看console输出)\n  </div>\n  <div class=\"card-body\">\n    <ngx-amap class=\"demo-map\" [resizeEnable]=\"true\"\n      (complete)=\"onMapEvent($event, 'complete')\"\n      (ready)=\"onMapEvent($event, 'ready')\"\n      (mapmove)=\"onMapEvent($event, 'mapmove')\"\n      (movestart)=\"onMapEvent($event, 'movestart')\"\n      (moveend)=\"onMapEvent($event, 'moveend')\"\n      (zoomchange)=\"onMapEvent($event, 'zoomchange')\"\n      (zoomstart)=\"onMapEvent($event, 'zoomstart')\"\n      (zoomend)=\"onMapEvent($event, 'zoomend')\"\n      (resize)=\"onMapEvent($event, 'resize')\"\n      (mapClick)=\"onMapEvent($event, 'mapClick')\"\n      (dblClick)=\"onMapEvent($event, 'dblClick')\"\n      (rightClick)=\"onMapEvent($event, 'rightClick')\"\n      (mouseMove)=\"onMapEvent($event, 'mouseMove')\"\n      (mouseOver)=\"onMapEvent($event, 'mouseOver')\"\n      (mouseWheel)=\"onMapEvent($event, 'mouseWheel')\"\n      (mouseOut)=\"onMapEvent($event, 'mouseOut')\"\n      (mouseUp)=\"onMapEvent($event, 'mouseUp')\"\n      (mouseDown)=\"onMapEvent($event, 'mouseDown')\"\n      (touchStart)=\"onMapEvent($event, 'touchStart')\"\n      (touchMove)=\"onMapEvent($event, 'touchMove')\"\n      (touchEnd)=\"onMapEvent($event, 'touchEnd')\"\n      (hotspotClick)=\"onMapEvent($event, 'hotspotClick')\"\n      (hotspotOver)=\"onMapEvent($event, 'hotspotOver')\"\n      (hotspotOut)=\"onMapEvent($event, 'hotspotOut')\"\n      (dragStart)=\"onMapEvent($event, 'dragStart')\"\n      (dragging)=\"onMapEvent($event, 'dragging')\"\n      (dragEnd)=\"onMapEvent($event, 'dragEnd')\"\n    ></ngx-amap>\n    <div class=\"mt-3\">\n      <tabset>\n        <tab heading=\"HTML\">\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/ngx-amap-demo/events/events.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/ngx-amap-demo/events/events.component.ts":
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
        this.demo_md_html = "<ngx-amap class=\"demo-map\" [resizeEnable]=\"true\"\n  (complete)=\"onMapEvent($event, 'complete')\"\n  (ready)=\"onMapEvent($event, 'ready')\"\n  (mapmove)=\"onMapEvent($event, 'mapMove')\"\n  (moveStart)=\"onMapEvent($event, 'moveStart')\"\n  (moveEnd)=\"onMapEvent($event, 'moveEnd')\"\n  (zoomChange)=\"onMapEvent($event, 'zoomChange')\"\n  (zoomStart)=\"onMapEvent($event, 'zoomStart')\"\n  (zoomEnd)=\"onMapEvent($event, 'zoomEnd')\"\n  (resize)=\"onMapEvent($event, 'resize')\"\n  (mapClick)=\"onMapEvent($event, 'mapClick')\"\n  (mapDblClick)=\"onMapEvent($event, 'mapDblClick')\"\n  (rightClick)=\"onMapEvent($event, 'rightClick')\"\n  (mouseMove)=\"onMapEvent($event, 'mouseMove')\"\n  (mouseOver)=\"onMapEvent($event, 'mouseOver')\"\n  (mouseWheel)=\"onMapEvent($event, 'mouseWheel')\"\n  (mouseOut)=\"onMapEvent($event, 'mouseOut')\"\n  (mouseUp)=\"onMapEvent($event, 'mouseUp')\"\n  (mouseDown)=\"onMapEvent($event, 'mouseDown')\"\n  (touchStart)=\"onMapEvent($event, 'touchStart')\"\n  (touchMove)=\"onMapEvent($event, 'touchMove')\"\n  (touchEnd)=\"onMapEvent($event, 'touchEnd')\"\n  (hotspotClick)=\"onMapEvent($event, 'hotspotClick')\"\n  (hotspotOver)=\"onMapEvent($event, 'hotspotOver')\"\n  (hotspotOut)=\"onMapEvent($event, 'hotspotOut')\"\n  (dragStart)=\"onMapEvent($event, 'dragStart')\"\n  (dragging)=\"onMapEvent($event, 'dragging')\"\n  (dragEnd)=\"onMapEvent($event, 'dragEnd')\"\n></ngx-amap>\n";
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent.prototype.onMapEvent = function (event, type) {
        console.log('map event:', type, event);
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__("../../../../../src/app/views/ngx-amap-demo/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/ngx-amap-demo/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ngx-amap-demo/methods/methods.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\r\n  <div class=\"card-header\">\r\n    调用地图方法\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <button class=\"btn btn-outline-primary\" (click)=\"map.setFitView()\">地图自适应显示</button>\r\n    <hr>\r\n    <ngx-amap #map class=\"demo-map\" name=\"demo\" [resizeEnable]=\"true\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\r\n      <amap-marker [position]=\"[116.205467, 39.907761]\"></amap-marker>\r\n      <amap-marker [position]=\"[116.368904, 39.913423]\"></amap-marker>\r\n      <amap-marker [position]=\"[116.305467, 39.807761]\"></amap-marker>\r\n    </ngx-amap>\r\n    <div class=\"mt-3\">\r\n      <tabset>\r\n        <tab heading=\"HTML\">\r\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\r\n        </tab>\r\n        <tab heading=\"支持的方法\">\r\n          <markdown>\r\n            ```typescript\r\n            // 返回值都是Promise\r\n            setFitView()\r\n            setZoom(level: number)\r\n            setCenter(position: LngLat|number[])\r\n            setZoomAndCenter(zoomLevel: number, center: LngLat|number[])\r\n            setlabelzIndex(index: number)\r\n            setCity(city: string)\r\n            clearMap()\r\n            getZoom()\r\n            getCenter()\r\n            getCity()\r\n            getSize()\r\n            ```\r\n          </markdown>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/ngx-amap-demo/methods/methods.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/ngx-amap-demo/methods/methods.component.ts":
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
        this.demo_md_html = "<button class=\"btn btn-outline-primary\" (click)=\"map.setFitView()\">\u5730\u56FE\u81EA\u9002\u5E94\u663E\u793A</button>\n<hr>\n<ngx-amap #map class=\"demo-map\" name=\"demo\" [resizeEnable]=\"true\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\">\n  <amap-marker [position]=\"[116.205467, 39.907761]\"></amap-marker>\n  <amap-marker [position]=\"[116.368904, 39.913423]\"></amap-marker>\n  <amap-marker [position]=\"[116.305467, 39.807761]\"></amap-marker>\n</ngx-amap>";
    }
    MethodsComponent.prototype.ngOnInit = function () {
    };
    MethodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-methods',
            template: __webpack_require__("../../../../../src/app/views/ngx-amap-demo/methods/methods.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/ngx-amap-demo/methods/methods.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MethodsComponent);
    return MethodsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ngx-amap-demo/ngx-amap-demo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxAmapDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_simple_component__ = __webpack_require__("../../../../../src/app/views/ngx-amap-demo/simple/simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__methods_methods_component__ = __webpack_require__("../../../../../src/app/views/ngx-amap-demo/methods/methods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events_component__ = __webpack_require__("../../../../../src/app/views/ngx-amap-demo/events/events.component.ts");
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
        },
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
var NgxAmapDemoRoutingModule = (function () {
    function NgxAmapDemoRoutingModule() {
    }
    NgxAmapDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], NgxAmapDemoRoutingModule);
    return NgxAmapDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/ngx-amap-demo/ngx-amap-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAmapDemoModule", function() { return NgxAmapDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/views/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_amap_demo_routing_module__ = __webpack_require__("../../../../../src/app/views/ngx-amap-demo/ngx-amap-demo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_simple_component__ = __webpack_require__("../../../../../src/app/views/ngx-amap-demo/simple/simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__methods_methods_component__ = __webpack_require__("../../../../../src/app/views/ngx-amap-demo/methods/methods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_events_component__ = __webpack_require__("../../../../../src/app/views/ngx-amap-demo/events/events.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NgxAmapDemoModule = (function () {
    function NgxAmapDemoModule() {
    }
    NgxAmapDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_amap_demo_routing_module__["a" /* NgxAmapDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__simple_simple_component__["a" /* SimpleComponent */],
                __WEBPACK_IMPORTED_MODULE_5__methods_methods_component__["a" /* MethodsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__events_events_component__["a" /* EventsComponent */]
            ]
        })
    ], NgxAmapDemoModule);
    return NgxAmapDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/ngx-amap-demo/simple/simple.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\n  <div class=\"card-header\">\n    简单示例\n  </div>\n  <div class=\"card-body\">\n    <ngx-amap class=\"demo-map\" [resizeEnable]=\"true\" [center]=\"[116.397428, 39.90923]\" [zoom]=\"13\"></ngx-amap>\n    <div class=\"mt-3\">\n      <tabset>\n        <tab heading=\"HTML\">\n          <markdown [data]=\"demo1_md_html | language: 'html'\"></markdown>\n        </tab>\n        <tab heading=\"支持的Input\">\n          <markdown>\n            ```typescript\n            // MapOptions:\n            view: any;\n            layers: any[];\n            zoom: number;\n            center: LngLat;\n            labelzIndex: number;\n            zooms: number[];\n            lang: string;\n            cursor: string;\n            crs: string;\n            animateEnable: boolean;\n            isHotspot: boolean;\n            defaultLayer: any;\n            rotateEnable: boolean;\n            resizeEnable: boolean;\n            showIndoorMap: boolean;\n            indoorMap: any;\n            expandZoomRange: boolean;\n            dragEnable: boolean;\n            zoomEnable: boolean;\n            doubleClickZoom: boolean;\n            keyboardEnable: boolean;\n            jogEnable: boolean;\n            scrollWheel: boolean;\n            touchZoom: boolean;\n            mapStyle: string;\n            features: string[];\n            showBuildingBlock: boolean;\n            \n            // Extra Options:\n            city: string;\n            name: string;\n            ```\n          </markdown>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/ngx-amap-demo/simple/simple.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/ngx-amap-demo/simple/simple.component.ts":
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
        this.demo1_md_html = '<ngx-amap class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13"></ngx-amap>';
    }
    SimpleComponent.prototype.ngOnInit = function () {
    };
    SimpleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simple',
            template: __webpack_require__("../../../../../src/app/views/ngx-amap-demo/simple/simple.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/ngx-amap-demo/simple/simple.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleComponent);
    return SimpleComponent;
}());



/***/ })

});
//# sourceMappingURL=ngx-amap-demo.module.chunk.js.map