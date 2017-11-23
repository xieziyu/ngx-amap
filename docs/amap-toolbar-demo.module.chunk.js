webpackJsonp(["amap-toolbar-demo.module"],{

/***/ "../../../../../src/app/views/amap-toolbar-demo/amap-toolbar-demo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmapToolbarDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_simple_component__ = __webpack_require__("../../../../../src/app/views/amap-toolbar-demo/simple/simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__methods_methods_component__ = __webpack_require__("../../../../../src/app/views/amap-toolbar-demo/methods/methods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events_component__ = __webpack_require__("../../../../../src/app/views/amap-toolbar-demo/events/events.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: '/amap-tool-bar/simple',
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
var AmapToolbarDemoRoutingModule = (function () {
    function AmapToolbarDemoRoutingModule() {
    }
    AmapToolbarDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AmapToolbarDemoRoutingModule);
    return AmapToolbarDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-toolbar-demo/amap-toolbar-demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmapToolbarDemoModule", function() { return AmapToolbarDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/views/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__amap_toolbar_demo_routing_module__ = __webpack_require__("../../../../../src/app/views/amap-toolbar-demo/amap-toolbar-demo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_simple_component__ = __webpack_require__("../../../../../src/app/views/amap-toolbar-demo/simple/simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__methods_methods_component__ = __webpack_require__("../../../../../src/app/views/amap-toolbar-demo/methods/methods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_events_component__ = __webpack_require__("../../../../../src/app/views/amap-toolbar-demo/events/events.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AmapToolbarDemoModule = (function () {
    function AmapToolbarDemoModule() {
    }
    AmapToolbarDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__amap_toolbar_demo_routing_module__["a" /* AmapToolbarDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__simple_simple_component__["a" /* SimpleComponent */],
                __WEBPACK_IMPORTED_MODULE_5__methods_methods_component__["a" /* MethodsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__events_events_component__["a" /* EventsComponent */]
            ]
        })
    ], AmapToolbarDemoModule);
    return AmapToolbarDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-toolbar-demo/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\n  <div class=\"card-header\">\n    地图工具条事件 (请查看console输出)\n  </div>\n  <div class=\"card-body\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"hide = !hide\">触发显示隐藏事件</button>\n    <hr>\n    <ngx-amap class=\"demo-map\">\n      <amap-tool-bar [hidden]=\"hide\"\n        (zoomchanged)=\"onToolBarEvent($event, 'zoomchanged')\"\n        (location)=\"onToolBarEvent($event, 'location')\"\n        (ready)=\"onToolBarEvent($event, 'ready')\"\n        (toolbarHide)=\"onToolBarEvent($event, 'toolbarHide')\"\n        (toolbarShow)=\"onToolBarEvent($event, 'toolbarShow')\"\n      ></amap-tool-bar>\n    </ngx-amap>\n    <div class=\"mt-3\">\n      <tabset>\n        <tab heading=\"HTML\">\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/amap-toolbar-demo/events/events.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-toolbar-demo/events/events.component.ts":
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
        this.demo_md_html = "<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"hide = !hide\">\u89E6\u53D1\u663E\u793A\u9690\u85CF\u4E8B\u4EF6</button>\n<hr>\n<ngx-amap class=\"demo-map\">\n  <amap-tool-bar [hidden]=\"hide\"\n    (zoomchanged)=\"onToolBarEvent($event, 'zoomchanged')\"\n    (location)=\"onToolBarEvent($event, 'location')\"\n    (ready)=\"onToolBarEvent($event, 'ready')\"\n    (toolbarHide)=\"onToolBarEvent($event, 'toolbarHide')\"\n    (toolbarShow)=\"onToolBarEvent($event, 'toolbarShow')\"\n  ></amap-tool-bar>\n</ngx-amap>\n";
        this.hide = false;
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent.prototype.onToolBarEvent = function (event, type) {
        console.log('toolbar event:', type, event);
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__("../../../../../src/app/views/amap-toolbar-demo/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-toolbar-demo/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-toolbar-demo/methods/methods.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\n  <div class=\"card-header\">\n    调用方法示例 (请查看console输出)\n  </div>\n  <div class=\"card-body\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"getMethods()\">调用Getter方法</button>\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"doLocation()\">调用doLocation方法</button>\n    <hr>\n    <ngx-amap class=\"demo-map\">\n      <amap-tool-bar></amap-tool-bar>\n    </ngx-amap>\n    <div class=\"mt-3\">\n      <tabset>\n        <tab heading=\"HTML\">\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\n        </tab>\n        <tab heading=\"Component\">\n          <markdown [data]=\"demo_md_ts | language: 'typescript'\"></markdown>\n        </tab>\n        <tab heading=\"支持的方法\">\n          <markdown>\n            ```typescript\n            show()\n            hide()\n            showRuler()\n            hideRuler()\n            showDirection()\n            hideDirection()\n            showLocation()\n            hideLocation()\n            doLocation()\n            setOffset(offset: IPixel)\n            getOffset()\n            getLocation()\n            ```\n          </markdown>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/amap-toolbar-demo/methods/methods.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-toolbar-demo/methods/methods.component.ts":
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
        this.demo_md_html = "<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"getMethods()\">\u8C03\u7528Getter\u65B9\u6CD5</button>\n<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"doLocation()\">\u8C03\u7528doLocation\u65B9\u6CD5</button>\n<hr>\n<ngx-amap class=\"demo-map\">\n  <amap-tool-bar></amap-tool-bar>\n</ngx-amap>\n";
        this.demo_md_ts = "import { Component, OnInit, ViewChild } from '@angular/core';\nimport { AmapToolBarDirective } from 'ngx-amap';\n\n@Component({\n  selector: 'app-methods',\n  templateUrl: './methods.component.html',\n  styleUrls: ['./methods.component.scss']\n})\nexport class MethodsComponent implements OnInit {\n  @ViewChild(AmapToolBarDirective) toolbar: AmapToolBarDirective;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  getMethods() {\n    if (this.toolbar) {\n      this.toolbar.getOffset().then(v => console.log('getOffset():', v));\n      this.toolbar.getLocation().then(v => console.log('getLocation():', v));\n    }\n  }\n\n  doLocation() {\n    if (this.toolbar) {\n      this.toolbar.doLocation().then(() => console.log('called doLocation()'));\n    }\n  }\n}\n";
    }
    MethodsComponent.prototype.ngOnInit = function () {
    };
    MethodsComponent.prototype.getMethods = function () {
        if (this.toolbar) {
            this.toolbar.getOffset().then(function (v) { return console.log('getOffset():', v); });
            this.toolbar.getLocation().then(function (v) { return console.log('getLocation():', v); });
        }
    };
    MethodsComponent.prototype.doLocation = function () {
        if (this.toolbar) {
            this.toolbar.doLocation().then(function () { return console.log('called doLocation()'); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ngx_amap__["c" /* AmapToolBarDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_amap__["c" /* AmapToolBarDirective */])
    ], MethodsComponent.prototype, "toolbar", void 0);
    MethodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-methods',
            template: __webpack_require__("../../../../../src/app/views/amap-toolbar-demo/methods/methods.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-toolbar-demo/methods/methods.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MethodsComponent);
    return MethodsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/amap-toolbar-demo/simple/simple.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-accent-info\">\n  <div class=\"card-header\">\n    简单示例\n  </div>\n  <div class=\"card-body\">\n    <ngx-amap class=\"demo-map\">\n      <amap-tool-bar></amap-tool-bar>\n    </ngx-amap>\n    <div class=\"mt-3\">\n      <tabset>\n        <tab heading=\"HTML\">\n          <markdown [data]=\"demo_md_html | language: 'html'\"></markdown>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/amap-toolbar-demo/simple/simple.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/amap-toolbar-demo/simple/simple.component.ts":
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
        this.demo_md_html = "<ngx-amap class=\"demo-map\">\n  <amap-tool-bar></amap-tool-bar>\n</ngx-amap>\n";
    }
    SimpleComponent.prototype.ngOnInit = function () {
    };
    SimpleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simple',
            template: __webpack_require__("../../../../../src/app/views/amap-toolbar-demo/simple/simple.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/amap-toolbar-demo/simple/simple.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleComponent);
    return SimpleComponent;
}());



/***/ })

});
//# sourceMappingURL=amap-toolbar-demo.module.chunk.js.map