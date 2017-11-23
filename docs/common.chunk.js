webpackJsonp(["common"],{

/***/ "../../../../../dist/ngx-amap/ngx-amap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NgxAmapModule; });
/* unused harmony export NgxAmapComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmapMarkerDirective; });
/* unused harmony export AmapInfoWindowComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AmapPolylineDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AmapToolBarDirective; });
/* unused harmony export ɵj */
/* unused harmony export ɵm */
/* unused harmony export ɵl */
/* unused harmony export ɵg */
/* unused harmony export ɵq */
/* unused harmony export ɵp */
/* unused harmony export ɵc */
/* unused harmony export ɵd */
/* unused harmony export ɵa */
/* unused harmony export ɵh */
/* unused harmony export ɵi */
/* unused harmony export ɵn */
/* unused harmony export ɵk */
/* unused harmony export ɵo */
/* unused harmony export ɵf */
/* unused harmony export ɵe */
/* unused harmony export ɵb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/empty.js");





class WindowRef {
    /**
     * @return {?}
     */
    getNativeWindow() {
        return window;
    }
}
WindowRef.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
WindowRef.ctorParameters = () => [];
class DocumentRef {
    /**
     * @return {?}
     */
    getNativeDocument() {
        return document;
    }
}
DocumentRef.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
DocumentRef.ctorParameters = () => [];

const MAP_API_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('ngx-amap MAP_API_CONFIG');
class MapAPILoaderService {
    /**
     * @param {?} config
     * @param {?} d
     * @param {?} w
     */
    constructor(config, d, w) {
        this._config = config || {};
        this._windowRef = w;
        this._documentRef = d;
    }
    /**
     * @return {?}
     */
    load() {
        if (this._mapLoaded) {
            return this._mapLoaded;
        }
        const /** @type {?} */ callbackName = `ngxAMapAPILoader`;
        const /** @type {?} */ script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = this.getSrcFromConfig(callbackName);
        this._mapLoaded = new Promise((resolve, reject) => {
            ((this._windowRef.getNativeWindow()))[callbackName] = () => {
                resolve();
            };
            script.onerror = (error) => { reject(error); };
        });
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._mapLoaded;
    }
    /**
     * @param {?} callbackName
     * @return {?}
     */
    getSrcFromConfig(callbackName) {
        const /** @type {?} */ urlBase = this._config.urlPath || 'http://webapi.amap.com/maps';
        const /** @type {?} */ queryParams = {
            v: this._config.apiVersion || '1.4.1',
            callback: callbackName,
            key: this._config.apiKey
        };
        const /** @type {?} */ params = Object.keys(queryParams)
            .filter((k) => queryParams[k] != null)
            .filter((k) => {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map((k) => {
            // join arrays as comma seperated strings
            const /** @type {?} */ i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map((entry) => `${entry.key}=${entry.value}`)
            .join('&');
        return `${urlBase}?${params}`;
    }
}
MapAPILoaderService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
MapAPILoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */], args: [MAP_API_CONFIG,] },] },
    { type: DocumentRef, },
    { type: WindowRef, },
];

class LoggerService {
    constructor() { }
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    i(tag, ...args) {
        console.log(`[${tag}]`, ...args);
    }
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    e(tag, ...args) {
        console.error(`[${tag}]`, ...args);
    }
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    w(tag, ...args) {
        console.warn(`[${tag}]`, ...args);
    }
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    d(tag, ...args) {
        // only stub;
    }
}
LoggerService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
LoggerService.ctorParameters = () => [];

class DebugLoggerService {
    constructor() { }
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    i(tag, ...args) {
        console.log(`[${tag}]`, ...args);
    }
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    e(tag, ...args) {
        console.error(`[${tag}]`, ...args);
    }
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    w(tag, ...args) {
        console.warn(`[${tag}]`, ...args);
    }
    /**
     * @param {?} tag
     * @param {...?} args
     * @return {?}
     */
    d(tag, ...args) {
        console.log(`[${tag}]`, ...args);
    }
}
DebugLoggerService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
DebugLoggerService.ctorParameters = () => [];

class EventBinder {
    /**
     * @template T
     * @param {?} target
     * @param {?} event
     * @return {?}
     */
    bindEvent(target, event) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(observer => {
            let /** @type {?} */ listenerPromise = target.then(m => {
                return AMap.event.addListener(m, event, e => {
                    setTimeout(() => observer.next(e));
                }, this);
            });
            return () => {
                listenerPromise.then(listener => {
                    AMap.event.removeListener(listener);
                    listenerPromise = null;
                });
            };
        });
    }
}

class MapAPIService extends EventBinder {
    /**
     * @param {?} loader
     * @param {?} logger
     */
    constructor(loader, logger) {
        super();
        this.loader = loader;
        this.logger = logger;
        this.TAG = 'map-api';
        this._mapPromise = new Promise(resolve => this._mapResolver = resolve);
    }
    /**
     * @param {?} el
     * @param {?} options
     * @return {?}
     */
    createMap(el, options) {
        return this.loader.load().then(() => {
            this._map = new AMap.Map(el, options);
            this._mapResolver(this._map);
            this.logger.d(this.TAG, 'new map created');
            return this._map;
        });
    }
    /**
     * @return {?}
     */
    destroyMap() {
        this._mapPromise.then(map => {
            map.clearMap();
            map.destroy();
        });
    }
    /**
     * @return {?}
     */
    get map() {
        return this._mapPromise;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    bindMapEvents(event) {
        return this.bindEvent(this._mapPromise, event);
    }
}
MapAPIService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
MapAPIService.ctorParameters = () => [
    { type: MapAPILoaderService, },
    { type: LoggerService, },
];

class PixelService {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
        this.TAG = 'pixel-service';
    }
    /**
     * @param {?} options
     * @param {?=} name
     * @return {?}
     */
    create(options, name) {
        if (this.verify(options, name)) {
            return new AMap.Pixel(options.x, options.y);
        }
        else {
            return undefined;
        }
    }
    /**
     * @param {?} pixel
     * @param {?=} name
     * @return {?}
     */
    verify(pixel, name) {
        if (typeof pixel.x !== 'number' || typeof pixel.y !== 'number') {
            this.logger.e(`${name || 'pixel'} should have type {x: number, y: number}`);
            return false;
        }
        return true;
    }
}
PixelService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
PixelService.ctorParameters = () => [
    { type: LoggerService, },
];

class SizeService {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
        this.TAG = 'size-service';
    }
    /**
     * @param {?} options
     * @param {?=} name
     * @return {?}
     */
    create(options, name) {
        if (this.verify(options, name)) {
            return new AMap.Size(options.width, options.height);
        }
        else {
            return undefined;
        }
    }
    /**
     * @param {?} size
     * @param {?=} name
     * @return {?}
     */
    verify(size, name) {
        if (typeof size.width !== 'number' || typeof size.height !== 'number') {
            this.logger.e(`${name || 'size'} should have type {width: number, height: number}`);
            return false;
        }
        return true;
    }
}
SizeService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
SizeService.ctorParameters = () => [
    { type: LoggerService, },
];

class IconService {
    /**
     * @param {?} logger
     * @param {?} pixel
     * @param {?} size
     */
    constructor(logger, pixel, size) {
        this.logger = logger;
        this.pixel = pixel;
        this.size = size;
        this.TAG = 'icon-service';
    }
    /**
     * @param {?} options
     * @param {?=} name
     * @return {?}
     */
    create(options, name) {
        if (typeof options === 'string') {
            return options;
        }
        if (!options) {
            return undefined;
        }
        if (!((options)).size) {
            return (options);
        }
        let /** @type {?} */ iconOption = (options);
        if (iconOption.size) {
            iconOption.size = this.size.create(iconOption.size, `${name || 'icon'}.size`);
        }
        if (iconOption.imageSize) {
            iconOption.imageSize = this.size.create(iconOption.size, `${name || 'icon'}.imageSize`);
        }
        if (iconOption.imageOffset) {
            iconOption.imageOffset = this.pixel.create(iconOption.imageOffset, `${name || 'icon'}.imageOffset`);
        }
        if (!iconOption.size) {
            delete iconOption.size;
        }
        if (!iconOption.imageSize) {
            delete iconOption.imageSize;
        }
        if (!iconOption.imageOffset) {
            delete iconOption.imageOffset;
        }
        return new AMap.Icon(iconOption);
    }
}
IconService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
IconService.ctorParameters = () => [
    { type: LoggerService, },
    { type: PixelService, },
    { type: SizeService, },
];

class LabelService {
    /**
     * @param {?} logger
     * @param {?} pixel
     */
    constructor(logger, pixel) {
        this.logger = logger;
        this.pixel = pixel;
        this.TAG = 'label-service';
    }
    /**
     * @param {?} options
     * @param {?=} name
     * @return {?}
     */
    create(options, name) {
        if (options) {
            return {
                content: options.content,
                offset: this.pixel.create(options.offset, `${name || 'label'}.offset`)
            };
        }
        else {
            return undefined;
        }
    }
}
LabelService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
LabelService.ctorParameters = () => [
    { type: LoggerService, },
    { type: PixelService, },
];

class MarkerService extends EventBinder {
    /**
     * @param {?} map
     * @param {?} logger
     * @param {?} pixel
     * @param {?} icon
     * @param {?} label
     */
    constructor(map, logger, pixel, icon, label) {
        super();
        this.map = map;
        this.logger = logger;
        this.pixel = pixel;
        this.icon = icon;
        this.label = label;
        this.TAG = 'marker-service';
        this._map = map.map;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    create(options) {
        return this._map.then(map => {
            if (options.offset) {
                options.offset = this.pixel.create(options.offset, 'offset');
            }
            if (options.icon) {
                options.icon = this.icon.create(options.icon);
            }
            if (options.shadow) {
                options.shadow = (this.icon.create(options.shadow, 'shadow'));
            }
            if (options.label) {
                options.label = this.label.create(options.label);
            }
            if (!options.offset) {
                delete options.offset;
            }
            if (!options.icon) {
                delete options.icon;
            }
            if (!options.shadow) {
                delete options.shadow;
            }
            if (!options.label) {
                delete options.label;
            }
            options.map = map;
            return new AMap.Marker(options);
        });
    }
    /**
     * @param {?} marker
     * @return {?}
     */
    destroy(marker) {
        return marker.then(m => {
            m.setMap(null);
        });
    }
}
MarkerService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
MarkerService.ctorParameters = () => [
    { type: MapAPIService, },
    { type: LoggerService, },
    { type: PixelService, },
    { type: IconService, },
    { type: LabelService, },
];

class InfoWindowService extends EventBinder {
    /**
     * @param {?} map
     * @param {?} logger
     * @param {?} pixel
     * @param {?} size
     */
    constructor(map, logger, pixel, size) {
        super();
        this.map = map;
        this.logger = logger;
        this.pixel = pixel;
        this.size = size;
        this.TAG = 'info-window-service';
        this._map = map.map;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    create(options) {
        return this._map.then(map => {
            if (options.offset) {
                options.offset = this.pixel.create(options.offset, 'offset');
            }
            if (options.size) {
                options.size = this.size.create(options.size, 'size');
            }
            return new AMap.InfoWindow(options);
        });
    }
    /**
     * @param {?} infoWindow
     * @return {?}
     */
    destroy(infoWindow) {
        return infoWindow.then(w => {
            w.close();
        });
    }
    /**
     * @param {?} infoWindow
     * @param {?=} position
     * @return {?}
     */
    open(infoWindow, position) {
        return this._map.then(map => {
            infoWindow.open(map, position);
        });
    }
}
InfoWindowService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
InfoWindowService.ctorParameters = () => [
    { type: MapAPIService, },
    { type: LoggerService, },
    { type: PixelService, },
    { type: SizeService, },
];

class Utils {
    /**
     * @template T
     * @param {?} component
     * @param {?} keys
     * @return {?}
     */
    static getOptionsFor(component, keys) {
        const /** @type {?} */ options = {};
        keys.forEach(key => {
            if (component[key] !== undefined && component[key] !== null) {
                options[key] = component[key];
            }
        });
        return options;
    }
}

class ChangeFilter {
    /**
     * @param {?} _changes
     */
    constructor(_changes) {
        this._changes = _changes;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    static of(changes) {
        return new ChangeFilter(changes);
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    notEmpty(key) {
        if (this._changes[key]) {
            let /** @type {?} */ value = this._changes[key].currentValue;
            if (value !== undefined && value !== null) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(value);
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].empty();
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    has(key) {
        if (this._changes[key]) {
            let /** @type {?} */ value = this._changes[key].currentValue;
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(value);
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].empty();
    }
}
ChangeFilter.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
ChangeFilter.ctorParameters = () => [
    null,
];

class PolylineService extends EventBinder {
    /**
     * @param {?} map
     * @param {?} logger
     */
    constructor(map, logger) {
        super();
        this.map = map;
        this.logger = logger;
        this.TAG = 'polyline-service';
        this._map = map.map;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    create(options) {
        return this._map.then(map => {
            options.map = map;
            return new AMap.Polyline(options);
        });
    }
    /**
     * @param {?} polyline
     * @return {?}
     */
    destroy(polyline) {
        return polyline.then(m => {
            m.setMap(null);
        });
    }
}
PolylineService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
PolylineService.ctorParameters = () => [
    { type: MapAPIService, },
    { type: LoggerService, },
];

class ToolBarService extends EventBinder {
    /**
     * @param {?} map
     * @param {?} logger
     * @param {?} pixels
     */
    constructor(map, logger, pixels) {
        super();
        this.map = map;
        this.logger = logger;
        this.pixels = pixels;
        this.TAG = 'tool-bar-service';
        this._map = map.map;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    create(options) {
        return new Promise(resolve => {
            this._map.then(map => {
                map.plugin('AMap.ToolBar', () => {
                    if (options.offset) {
                        options.offset = this.pixels.create(options.offset, 'offset');
                    }
                    if (!options.offset) {
                        delete options.offset;
                    }
                    const /** @type {?} */ toolbar = new AMap.ToolBar(options);
                    map.addControl(toolbar);
                    resolve(toolbar);
                });
            });
        });
    }
    /**
     * @param {?} toolbar
     * @return {?}
     */
    destroy(toolbar) {
        return this._map.then(map => toolbar.then(t => map.removeControl(t)));
    }
}
ToolBarService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
ToolBarService.ctorParameters = () => [
    { type: MapAPIService, },
    { type: LoggerService, },
    { type: PixelService, },
];

const ALL_OPTIONS = [
    'view',
    'layers',
    'zoom',
    'center',
    'labelzIndex',
    'zooms',
    'lang',
    'cursor',
    'crs',
    'animateEnable',
    'isHotspot',
    'defaultLayer',
    'rotateEnable',
    'resizeEnable',
    'showIndoorMap',
    'indoorMap',
    'expandZoomRange',
    'dragEnable',
    'zoomEnable',
    'doubleClickZoom',
    'keyboardEnable',
    'jogEnable',
    'scrollWheel',
    'touchZoom',
    'mapStyle',
    'features',
    'showBuildingBlock'
];
class NgxAmapComponent {
    /**
     * @param {?} el
     * @param {?} api
     * @param {?} logger
     */
    constructor(el, api, logger) {
        this.el = el;
        this.api = api;
        this.logger = logger;
        this.TAG = 'ngx-amap';
        // ngx-amap events:
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mapClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.complete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mapmove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.movestart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.moveend = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.zoomchange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.zoomstart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.zoomend = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.resize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.rightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseWheel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.touchStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.touchMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.touchEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.hotspotClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.hotspotOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.hotspotOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dragging = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this._inited = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.logger.d(this.TAG, 'map api initializing...');
        const /** @type {?} */ container = this.el.nativeElement.querySelector('div.ngx-amap-container-inner');
        const /** @type {?} */ options = Utils.getOptionsFor(this, ALL_OPTIONS);
        this.logger.d(this.TAG, 'map options:', options);
        this.api.createMap(container, options)
            .then(map => this.ready.emit(map))
            .then(() => this.logger.d(this.TAG, 'map is ready.'))
            .catch(() => this.logger.e(this.TAG, 'failed to load AMap script.'));
        this.bindEvents();
        this._inited = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
        this.api.destroyMap();
        this.logger.d(this.TAG, 'map api destroyed.');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ filter = ChangeFilter.of(changes);
        if (this._inited) {
            filter.has('zoom').subscribe(v => this.setZoom(v));
            filter.has('center').subscribe(v => this.setCenter(v));
        }
        // Not included in OPTIONS
        filter.has('city').subscribe(v => this.setCity(v));
    }
    /**
     * @return {?}
     */
    bindEvents() {
        this._subscriptions = this.api.bindMapEvents('complete').subscribe(e => this.complete.emit(e));
        this._subscriptions.add(this.api.bindMapEvents('mapmove').subscribe(e => this.mapmove.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('movestart').subscribe(e => this.movestart.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('moveend').subscribe(e => this.moveend.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('zoomchange').subscribe(e => this.zoomchange.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('zoomstart').subscribe(e => this.zoomstart.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('zoomend').subscribe(e => this.zoomend.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('resize').subscribe(e => this.resize.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('click').subscribe(e => this.mapClick.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('dblclick').subscribe(e => this.dblClick.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('rightclick').subscribe(e => this.rightClick.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('mousemove').subscribe(e => this.mouseMove.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('mouseover').subscribe(e => this.mouseOver.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('mousewheel').subscribe(e => this.mouseWheel.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('mouseup').subscribe(e => this.mouseUp.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('mouseout').subscribe(e => this.mouseOut.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('mousedown').subscribe(e => this.mouseDown.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('touchstart').subscribe(e => this.touchStart.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('touchmove').subscribe(e => this.touchMove.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('touchend').subscribe(e => this.touchEnd.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('hotspotclick').subscribe(e => this.hotspotClick.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('hotspotover').subscribe(e => this.hotspotOver.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('hotspotout').subscribe(e => this.hotspotOut.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('dragstart').subscribe(e => this.dragStart.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('dragging').subscribe(e => this.dragging.emit(e)));
        this._subscriptions.add(this.api.bindMapEvents('dragend').subscribe(e => this.dragEnd.emit(e)));
    }
    /**
     * @return {?}
     */
    setFitView() {
        return this.api.map.then(map => map.setFitView());
    }
    /**
     * @param {?} level
     * @return {?}
     */
    setZoom(level) {
        return this.api.map.then(map => map.setZoom(level));
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setCenter(position) {
        return this.api.map.then(map => map.setCenter(position));
    }
    /**
     * @param {?} zoomLevel
     * @param {?} center
     * @return {?}
     */
    setZoomAndCenter(zoomLevel, center) {
        return this.api.map.then(map => map.setZoomAndCenter(zoomLevel, center));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setlabelzIndex(index) {
        return this.api.map.then(map => map.setlabelzIndex(index));
    }
    /**
     * @param {?} city
     * @return {?}
     */
    setCity(city) {
        return this.api.map.then(map => new Promise(resolve => map.setCity(city, resolve)));
    }
    /**
     * @return {?}
     */
    clearMap() {
        return this.api.map.then(map => map.clearMap());
    }
    /**
     * @return {?}
     */
    getZoom() {
        return this.api.map.then(map => map.getZoom());
    }
    /**
     * @return {?}
     */
    getCenter() {
        return this.api.map.then(map => map.getCenter());
    }
    /**
     * @return {?}
     */
    getCity() {
        return this.api.map.then(map => new Promise(resolve => map.getCity(resolve)));
    }
    /**
     * @return {?}
     */
    getSize() {
        return this.api.map.then(map => map.getSize());
    }
}
NgxAmapComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ngx-amap',
                template: `
    <div class='ngx-amap-container-inner'></div>
    <div class='ngx-amap-content'>
      <ng-content></ng-content>
    </div>
  `,
                styles: [`
    .ngx-amap-container-inner {
      width: inherit;
      height: inherit; }

    .ngx-amap-content {
      display: none; }
  `],
                providers: [
                    MapAPIService,
                    MarkerService,
                    InfoWindowService,
                    PolylineService,
                    ToolBarService
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxAmapComponent.ctorParameters = () => [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
    { type: MapAPIService, },
    { type: LoggerService, },
];
NgxAmapComponent.propDecorators = {
    'view': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'layers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'zoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'center': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'labelzIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'zooms': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'lang': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'cursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'crs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'animateEnable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'isHotspot': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'defaultLayer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'rotateEnable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'resizeEnable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'showIndoorMap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'indoorMap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'expandZoomRange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'dragEnable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'zoomEnable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'doubleClickZoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'keyboardEnable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'jogEnable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'scrollWheel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'touchZoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'mapStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'features': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'showBuildingBlock': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'city': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'ready': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mapClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'dblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'complete': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mapmove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'movestart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'moveend': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'zoomchange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'zoomstart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'zoomend': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'resize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'rightClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseWheel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'touchStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'touchMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'touchEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'hotspotClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'hotspotOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'hotspotOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'dragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'dragging': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'dragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
};

const ALL_OPTIONS$2 = [
    'isCustom',
    'autoMove',
    'closeWhenClickMap',
    'content',
    'size',
    'offset',
    'position',
    'showShadow'
];
class AmapInfoWindowComponent {
    /**
     * @param {?} el
     * @param {?} logger
     * @param {?} infoWindows
     * @param {?} sizes
     */
    constructor(el, logger, infoWindows, sizes) {
        this.el = el;
        this.logger = logger;
        this.infoWindows = infoWindows;
        this.sizes = sizes;
        this.TAG = 'amap-info-window';
        // Extra property:
        this.isOpen = false;
        // amap-info-window events:
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.windowOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.windowClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.windowChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.content = this.el.nativeElement.querySelector('.amap-info-window-content');
        const /** @type {?} */ options = Utils.getOptionsFor(this, ALL_OPTIONS$2);
        this.logger.d(this.TAG, 'info window options:', options);
        this._infoWindow = this.infoWindows.create(options);
        this.bindEvents();
        this.toggleOpen();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this._infoWindow) {
            return;
        }
        const /** @type {?} */ filter = ChangeFilter.of(changes);
        filter.has('content').subscribe(v => this.setContent(v));
        filter.has('isOpen').subscribe(v => this.toggleOpen());
        filter.notEmpty('position').subscribe(v => this.setPosition(v));
        filter.notEmpty('size').subscribe(v => this.setSize(v));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
        this.infoWindows.destroy(this._infoWindow);
    }
    /**
     * @return {?}
     */
    bindEvents() {
        this._subscriptions = this.infoWindows.bindEvent(this._infoWindow, 'change').subscribe(e => this.windowChange.emit(e));
        this._subscriptions.add(this.infoWindows.bindEvent(this._infoWindow, 'open').subscribe(e => {
            this.windowOpen.emit(e);
            if (!this.isOpen) {
                this.isOpenChange.emit(true);
            }
        }));
        this._subscriptions.add(this.infoWindows.bindEvent(this._infoWindow, 'close').subscribe(e => {
            this.windowClose.emit(e);
            if (this.isOpen) {
                this.isOpenChange.emit(false);
            }
        }));
    }
    /**
     * @return {?}
     */
    toggleOpen() {
        this.logger.d(this.TAG, 'toggle open');
        this.isOpen ? this.open() : this.close();
    }
    /**
     * @param {?=} position
     * @return {?}
     */
    open(position) {
        return this._infoWindow.then(infoWindow => {
            if (this.hostMarker) {
                return this.hostMarker.then(marker => this.infoWindows.open(infoWindow, marker.getPosition()));
            }
            else if (position) {
                return this.infoWindows.open(infoWindow, position);
            }
            else if (this.position) {
                return this.infoWindows.open(infoWindow, this.position);
            }
            else {
                return this.infoWindows.open(infoWindow);
            }
        });
    }
    /**
     * @return {?}
     */
    close() {
        return this._infoWindow.then(infoWindow => infoWindow.close());
    }
    /**
     * @param {?} content
     * @return {?}
     */
    setContent(content) {
        return this._infoWindow.then(infoWindow => infoWindow.setContent(content));
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) {
        return this._infoWindow.then(infoWindow => infoWindow.setPosition(position));
    }
    /**
     * @param {?} size
     * @return {?}
     */
    setSize(size) {
        return this._infoWindow.then(infoWindow => {
            const /** @type {?} */ value = this.sizes.create(size, 'size');
            infoWindow.setSize(value);
        });
    }
    /**
     * @return {?}
     */
    getIsOpen() {
        return this._infoWindow.then(infoWindow => infoWindow.getIsOpen());
    }
    /**
     * @return {?}
     */
    getContent() {
        return this._infoWindow.then(infoWindow => infoWindow.getContent());
    }
    /**
     * @return {?}
     */
    getPosition() {
        return this._infoWindow.then(infoWindow => infoWindow.getPosition());
    }
    /**
     * @return {?}
     */
    getSize() {
        return this._infoWindow.then(infoWindow => infoWindow.getSize());
    }
}
AmapInfoWindowComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'amap-info-window',
                template: `
    <div class='amap-info-window-inner'></div>
    <div class='amap-info-window-content'>
      <ng-content></ng-content>
    </div>
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
AmapInfoWindowComponent.ctorParameters = () => [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
    { type: LoggerService, },
    { type: InfoWindowService, },
    { type: SizeService, },
];
AmapInfoWindowComponent.propDecorators = {
    'isCustom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'autoMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'closeWhenClickMap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'offset': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'position': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'showShadow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'isOpenChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'windowOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'windowClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'windowChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
};

const ALL_OPTIONS$1 = [
    'position',
    'offset',
    'icon',
    'content',
    'topWhenClick',
    'bubble',
    'draggable',
    'raiseOnDrag',
    'cursor',
    'visible',
    'zIndex',
    'angle',
    'autoRotation',
    'shadow',
    'title',
    'clickable',
    'shape',
    'extData',
    'label'
];
class AmapMarkerDirective {
    /**
     * @param {?} logger
     * @param {?} markers
     * @param {?} pixel
     * @param {?} icons
     * @param {?} labels
     */
    constructor(logger, markers, pixel, icons, labels) {
        this.logger = logger;
        this.markers = markers;
        this.pixel = pixel;
        this.icons = icons;
        this.labels = labels;
        this.TAG = 'amap-marker';
        this.hidden = false;
        this.openInfoWindow = true;
        // amap-marker events:
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.markerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.rightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dragging = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.touchStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.touchMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.touchEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.moving = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.moveend = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.movealong = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // amap-info-window:
        this.infoWindowComponent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ filter = ChangeFilter.of(changes);
        if (!this._marker) {
            const /** @type {?} */ options = Utils.getOptionsFor(this, ALL_OPTIONS$1);
            this._marker = this.markers.create(options);
            this.bindEvents();
            this._marker.then(marker => this.ready.emit(marker));
        }
        else {
            filter.has('icon').subscribe(v => this.setIcon(v));
            filter.has('shadow').subscribe(v => this.setShadow(v));
            filter.has('label').subscribe(v => this.setLabel(v));
            filter.has('title').subscribe(v => this.setTitle(v));
            filter.has('content').subscribe(v => this.setContent(v));
            filter.has('extData').subscribe(v => this.setExtData(v));
            filter.has('clickable').subscribe(v => this.setClickable(!!v));
            filter.has('draggable').subscribe(v => this.setDraggable(!!v));
            filter.has('visible').subscribe(v => v ? this.show() : this.hide());
            filter.has('cursor').subscribe(v => this.setCursor(v));
            filter.has('animation').subscribe(v => this.setAnimation(v));
            filter.has('angle').subscribe(v => this.setAngle(v));
            filter.has('zIndex').subscribe(v => this.setzIndex(v));
            filter.has('shape').subscribe(v => this.setShape(v));
            filter.notEmpty('offset').subscribe(v => this.setOffset(v));
            filter.notEmpty('position').subscribe(v => this.setPosition(v));
        }
        filter.has('isTop').subscribe(v => this.setTop(!!v));
        filter.has('hidden').subscribe(v => v ? this.hide() : this.show());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
        this.markers.destroy(this._marker);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateInfoWindow();
        this.infoWindowComponent.changes.subscribe(() => this.updateInfoWindow());
    }
    /**
     * @return {?}
     */
    updateInfoWindow() {
        if (this.infoWindowComponent.length > 1) {
            this.logger.e(this.TAG, 'Expected no more than 1 info window.');
            return;
        }
        this.infoWindowComponent.forEach(component => {
            component.hostMarker = this._marker;
        });
    }
    /**
     * @return {?}
     */
    bindEvents() {
        this._subscriptions = this.bindMarkerEvent('click').subscribe(e => {
            if (this.openInfoWindow) {
                this.infoWindowComponent.forEach(component => {
                    component.open();
                });
            }
            this.markerClick.emit(e);
        });
        this._subscriptions.add(this.bindMarkerEvent('dblclick').subscribe(e => this.dblClick.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('rightclick').subscribe(e => this.rightClick.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('mousemove').subscribe(e => this.mouseMove.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('mouseover').subscribe(e => this.mouseOver.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('mouseout').subscribe(e => this.mouseOut.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('mousedown').subscribe(e => this.mouseDown.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('mouseup').subscribe(e => this.mouseUp.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('dragstart').subscribe(e => this.dragStart.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('dragging').subscribe(e => this.dragging.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('dragend').subscribe(e => this.dragEnd.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('touchstart').subscribe(e => this.touchStart.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('touchmove').subscribe(e => this.touchMove.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('touchend').subscribe(e => this.touchEnd.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('moving').subscribe(e => this.moving.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('moveend').subscribe(e => this.moveend.emit(e)));
        this._subscriptions.add(this.bindMarkerEvent('movealong').subscribe(e => this.movealong.emit(e)));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    bindMarkerEvent(event) {
        return this.markers.bindEvent(this._marker, event);
    }
    /**
     * @return {?}
     */
    show() {
        return this._marker.then(m => m.show());
    }
    /**
     * @return {?}
     */
    hide() {
        return this._marker.then(m => m.hide());
    }
    /**
     * @param {?} position
     * @param {?} speed
     * @param {?=} f
     * @return {?}
     */
    moveTo(position, speed, f) {
        return this._marker.then(marker => marker.moveTo(position, speed, f));
    }
    /**
     * @param {?} path
     * @param {?} speed
     * @param {?=} f
     * @return {?}
     */
    moveAlong(path, speed, f) {
        return this._marker.then(marker => marker.moveAlong(path, speed, f));
    }
    /**
     * @return {?}
     */
    stopMove() {
        return this._marker.then(marker => marker.stopMove());
    }
    /**
     * @return {?}
     */
    pauseMove() {
        return this._marker.then(marker => marker.pauseMove());
    }
    /**
     * @return {?}
     */
    resumeMove() {
        return this._marker.then(marker => marker.resumeMove());
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    setOffset(offset) {
        return this._marker.then(marker => {
            const /** @type {?} */ value = this.pixel.create(offset, 'offset');
            if (value) {
                marker.setOffset(value);
            }
        });
    }
    /**
     * @param {?} icon
     * @return {?}
     */
    setIcon(icon) {
        return this._marker.then(marker => {
            const /** @type {?} */ value = this.icons.create(icon, 'icon');
            marker.setIcon(value);
        });
    }
    /**
     * @param {?} shadow
     * @return {?}
     */
    setShadow(shadow) {
        return this._marker.then(marker => {
            const /** @type {?} */ value = (this.icons.create(shadow, 'shadow'));
            marker.setShadow(value);
        });
    }
    /**
     * @param {?} label
     * @return {?}
     */
    setLabel(label) {
        return this._marker.then(marker => {
            const /** @type {?} */ value = this.labels.create(label, 'label');
            marker.setLabel(value);
        });
    }
    /**
     * @param {?} draggable
     * @return {?}
     */
    setDraggable(draggable) {
        return this._marker.then(marker => marker.setDraggable(draggable));
    }
    /**
     * @param {?} clickable
     * @return {?}
     */
    setClickable(clickable) {
        return this._marker.then(marker => marker.setClickable(clickable));
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) {
        return this._marker.then(marker => marker.setPosition(position));
    }
    /**
     * @param {?} angle
     * @return {?}
     */
    setAngle(angle) {
        return this._marker.then(marker => marker.setAngle(angle));
    }
    /**
     * @param {?} zIndex
     * @return {?}
     */
    setzIndex(zIndex) {
        return this._marker.then(marker => marker.setzIndex(zIndex));
    }
    /**
     * @param {?} content
     * @return {?}
     */
    setContent(content) {
        return this._marker.then(marker => marker.setContent(content));
    }
    /**
     * @param {?} title
     * @return {?}
     */
    setTitle(title) {
        return this._marker.then(marker => marker.setTitle(title));
    }
    /**
     * @param {?} cursor
     * @return {?}
     */
    setCursor(cursor) {
        return this._marker.then(marker => marker.setCursor(cursor));
    }
    /**
     * @param {?} isTop
     * @return {?}
     */
    setTop(isTop) {
        return this._marker.then(marker => marker.setTop(isTop));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setExtData(data) {
        return this._marker.then(marker => marker.setExtData(data));
    }
    /**
     * @param {?} shape
     * @return {?}
     */
    setShape(shape) {
        return this._marker.then(marker => marker.setShape(shape));
    }
    /**
     * @param {?} animation
     * @return {?}
     */
    setAnimation(animation) {
        return this._marker.then(marker => marker.setAnimation(animation));
    }
    /**
     * @return {?}
     */
    getOffset() {
        return this._marker.then(marker => marker.getOffset());
    }
    /**
     * @return {?}
     */
    getPosition() {
        return this._marker.then(marker => marker.getPosition());
    }
    /**
     * @return {?}
     */
    getLabel() {
        return this._marker.then(marker => marker.getLabel());
    }
    /**
     * @return {?}
     */
    getAngle() {
        return this._marker.then(marker => marker.getAngle());
    }
    /**
     * @return {?}
     */
    getzIndex() {
        return this._marker.then(marker => marker.getzIndex());
    }
    /**
     * @return {?}
     */
    getIcon() {
        return this._marker.then(marker => marker.getIcon());
    }
    /**
     * @return {?}
     */
    getContent() {
        return this._marker.then(marker => marker.getContent());
    }
    /**
     * @return {?}
     */
    getTitle() {
        return this._marker.then(marker => marker.getTitle());
    }
    /**
     * @return {?}
     */
    getTop() {
        return this._marker.then(marker => marker.getTop());
    }
    /**
     * @return {?}
     */
    getShadow() {
        return this._marker.then(marker => marker.getShadow());
    }
    /**
     * @return {?}
     */
    getShape() {
        return this._marker.then(marker => marker.getShape());
    }
    /**
     * @return {?}
     */
    getExtData() {
        return this._marker.then(marker => marker.getExtData());
    }
    /**
     * @return {?}
     */
    getMap() {
        return this._marker.then(marker => marker.getMap());
    }
    /**
     * @return {?}
     */
    getAnimation() {
        return this._marker.then(marker => marker.getAnimation());
    }
    /**
     * @return {?}
     */
    getClickable() {
        return this._marker.then(marker => marker.getClickable());
    }
    /**
     * @return {?}
     */
    getDraggable() {
        return this._marker.then(marker => marker.getDraggable());
    }
}
AmapMarkerDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                selector: 'amap-marker'
            },] },
];
/**
 * @nocollapse
 */
AmapMarkerDirective.ctorParameters = () => [
    { type: LoggerService, },
    { type: MarkerService, },
    { type: PixelService, },
    { type: IconService, },
    { type: LabelService, },
];
AmapMarkerDirective.propDecorators = {
    'position': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'offset': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'icon': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'content': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'topWhenClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'bubble': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'raiseOnDrag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'cursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'visible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'angle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'autoRotation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'shadow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'clickable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'shape': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'extData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'label': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'isTop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'animation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'hidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'openInfoWindow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'ready': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'markerClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'dblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'rightClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'dragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'dragging': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'dragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'touchStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'touchMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'touchEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'moving': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'moveend': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'movealong': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'infoWindowComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChildren */], args: [AmapInfoWindowComponent,] },],
};

const ALL_OPTIONS$3 = [
    'zIndex',
    'bubble',
    'geodesic',
    'isOutline',
    'borderWeight',
    'outlineColor',
    'path',
    'strokeColor',
    'strokeOpacity',
    'strokeWeight',
    'strokeStyle',
    'strokeDasharray',
    'lineJoin',
    'extData',
    'showDir'
];
class AmapPolylineDirective {
    /**
     * @param {?} logger
     * @param {?} polylines
     */
    constructor(logger, polylines) {
        this.logger = logger;
        this.polylines = polylines;
        this.TAG = 'amap-polyline';
        // Extra property:
        this.hidden = false;
        // amap-polyline events:
        this.polylineClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.rightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.polylineHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.polylineShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.touchStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.touchMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.touchEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ filter = ChangeFilter.of(changes);
        if (!this._polyline) {
            const /** @type {?} */ options = this.options || Utils.getOptionsFor(this, ALL_OPTIONS$3);
            this._polyline = this.polylines.create(options);
            this.bindEvents();
            this._polyline.then(p => this.ready.emit(p));
        }
        else {
            filter.has('path').subscribe(v => this.setPath(v));
            filter.has('options').subscribe(v => this.setOptions(v || {}));
            filter.has('extData').subscribe(v => this.setExtData(v));
        }
        filter.has('hidden').subscribe(v => v ? this.hide() : this.show());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
        this.polylines.destroy(this._polyline);
    }
    /**
     * @return {?}
     */
    bindEvents() {
        this._subscriptions = this.bindPolylineEvent('click').subscribe(e => this.polylineClick.emit(e));
        this._subscriptions.add(this.bindPolylineEvent('dblclick').subscribe(e => this.dblClick.emit(e)));
        this._subscriptions.add(this.bindPolylineEvent('rightclick').subscribe(e => this.rightClick.emit(e)));
        this._subscriptions.add(this.bindPolylineEvent('hide').subscribe(e => this.polylineHide.emit(e)));
        this._subscriptions.add(this.bindPolylineEvent('show').subscribe(e => this.polylineShow.emit(e)));
        this._subscriptions.add(this.bindPolylineEvent('mousedown').subscribe(e => this.mouseDown.emit(e)));
        this._subscriptions.add(this.bindPolylineEvent('mouseup').subscribe(e => this.mouseUp.emit(e)));
        this._subscriptions.add(this.bindPolylineEvent('mouseover').subscribe(e => this.mouseOver.emit(e)));
        this._subscriptions.add(this.bindPolylineEvent('mouseout').subscribe(e => this.mouseOut.emit(e)));
        this._subscriptions.add(this.bindPolylineEvent('change').subscribe(e => this.change.emit(e)));
        this._subscriptions.add(this.bindPolylineEvent('touchstart').subscribe(e => this.touchStart.emit(e)));
        this._subscriptions.add(this.bindPolylineEvent('touchmove').subscribe(e => this.touchMove.emit(e)));
        this._subscriptions.add(this.bindPolylineEvent('touchend').subscribe(e => this.touchEnd.emit(e)));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    bindPolylineEvent(event) {
        return this.polylines.bindEvent(this._polyline, event);
    }
    /**
     * @return {?}
     */
    show() {
        return this._polyline.then(p => p.show());
    }
    /**
     * @return {?}
     */
    hide() {
        return this._polyline.then(p => p.hide());
    }
    /**
     * @param {?} path
     * @return {?}
     */
    setPath(path) {
        return this._polyline.then(p => p.setPath(path));
    }
    /**
     * @param {?} opt
     * @return {?}
     */
    setOptions(opt) {
        return this._polyline.then(p => p.setOptions(opt));
    }
    /**
     * @param {?} ext
     * @return {?}
     */
    setExtData(ext) {
        return this._polyline.then(p => p.setExtData(ext));
    }
    /**
     * @return {?}
     */
    getPath() {
        return this._polyline.then(p => p.getPath());
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this._polyline.then(p => p.getOptions());
    }
    /**
     * @return {?}
     */
    getLength() {
        return this._polyline.then(p => p.getLength());
    }
    /**
     * @return {?}
     */
    getBounds() {
        return this._polyline.then(p => p.getBounds());
    }
    /**
     * @return {?}
     */
    getExtData() {
        return this._polyline.then(p => p.getExtData());
    }
}
AmapPolylineDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                selector: 'amap-polyline'
            },] },
];
/**
 * @nocollapse
 */
AmapPolylineDirective.ctorParameters = () => [
    { type: LoggerService, },
    { type: PolylineService, },
];
AmapPolylineDirective.propDecorators = {
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'bubble': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'geodesic': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'isOutline': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'borderWeight': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'outlineColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'path': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'strokeColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'strokeOpacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'strokeWeight': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'strokeStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'strokeDasharray': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'lineJoin': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'extData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'showDir': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'hidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'polylineClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'ready': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'dblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'rightClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'polylineHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'polylineShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'mouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'change': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'touchStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'touchMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'touchEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
};

const ALL_OPTIONS$4 = [
    'offset',
    'position',
    'ruler',
    'noIpLocate',
    'locate',
    'liteStyle',
    'direction',
    'autoPosition',
    'locationMarker',
    'useNative'
];
class AmapToolBarDirective {
    /**
     * @param {?} logger
     * @param {?} toolbars
     * @param {?} pixel
     */
    constructor(logger, toolbars, pixel) {
        this.logger = logger;
        this.toolbars = toolbars;
        this.pixel = pixel;
        this.TAG = 'amap-tool-bar';
        // Extra property:
        this.hidden = false;
        // amap-tool-bar events:
        this.zoomchanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.location = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.toolbarHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.toolbarShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ options = Utils.getOptionsFor(this, ALL_OPTIONS$4);
        this._toolbar = this.toolbars.create(options);
        this.bindEvents();
        this._toolbar.then(t => this.ready.emit(t));
        this.hidden ? this.hide() : this.show();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this._toolbar) {
            return;
        }
        const /** @type {?} */ filter = ChangeFilter.of(changes);
        filter.has('ruler').subscribe(v => v ? this.showRuler() : this.hideRuler());
        filter.has('direction').subscribe(v => v ? this.showDirection() : this.hideDirection());
        filter.has('locate').subscribe(v => v ? this.showLocation() : this.hideLocation());
        filter.notEmpty('offset').subscribe(v => this.setOffset(v));
        filter.has('hidden').subscribe(v => v ? this.hide() : this.show());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
        this.toolbars.destroy(this._toolbar);
    }
    /**
     * @return {?}
     */
    bindEvents() {
        this._subscriptions = this.bindToolBarEvent('zoomchanged').subscribe(e => this.zoomchanged.emit(e));
        this._subscriptions.add(this.bindToolBarEvent('location').subscribe(e => this.location.emit(e)));
        this._subscriptions.add(this.bindToolBarEvent('show').subscribe(e => this.toolbarShow.emit(e)));
        this._subscriptions.add(this.bindToolBarEvent('hide').subscribe(e => this.toolbarHide.emit(e)));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    bindToolBarEvent(event) {
        return this.toolbars.bindEvent(this._toolbar, event);
    }
    /**
     * @return {?}
     */
    show() {
        return this._toolbar.then(t => t.show());
    }
    /**
     * @return {?}
     */
    hide() {
        return this._toolbar.then(t => t.hide());
    }
    /**
     * @return {?}
     */
    showRuler() {
        return this._toolbar.then(t => t.showRuler());
    }
    /**
     * @return {?}
     */
    hideRuler() {
        return this._toolbar.then(t => t.hideRuler());
    }
    /**
     * @return {?}
     */
    showDirection() {
        return this._toolbar.then(t => t.showDirection());
    }
    /**
     * @return {?}
     */
    hideDirection() {
        return this._toolbar.then(t => t.hideDirection());
    }
    /**
     * @return {?}
     */
    showLocation() {
        return this._toolbar.then(t => t.showLocation());
    }
    /**
     * @return {?}
     */
    hideLocation() {
        return this._toolbar.then(t => t.hideLocation());
    }
    /**
     * @return {?}
     */
    doLocation() {
        return this._toolbar.then(t => t.doLocation());
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    setOffset(offset) {
        return this._toolbar.then(t => {
            const /** @type {?} */ value = this.pixel.create(offset, 'offset');
            if (value) {
                t.setOffset(value);
            }
        });
    }
    /**
     * @return {?}
     */
    getOffset() {
        return this._toolbar.then(t => t.getOffset());
    }
    /**
     * @return {?}
     */
    getLocation() {
        return this._toolbar.then(t => t.getLocation());
    }
}
AmapToolBarDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                selector: 'amap-tool-bar'
            },] },
];
/**
 * @nocollapse
 */
AmapToolBarDirective.ctorParameters = () => [
    { type: LoggerService, },
    { type: ToolBarService, },
    { type: PixelService, },
];
AmapToolBarDirective.propDecorators = {
    'offset': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'position': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'ruler': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'noIpLocate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'locate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'liteStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'direction': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'autoPosition': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'locationMarker': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'useNative': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'hidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'zoomchanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'location': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'ready': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'toolbarHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'toolbarShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
};

class NgxAmapModule {
    /**
     * @param {?=} mapAPILoaderConfig
     * @return {?}
     */
    static forRoot(mapAPILoaderConfig) {
        return {
            ngModule: NgxAmapModule,
            providers: [
                WindowRef,
                DocumentRef,
                MapAPILoaderService,
                { provide: MAP_API_CONFIG, useValue: mapAPILoaderConfig },
                { provide: LoggerService, useClass: mapAPILoaderConfig.debug ? DebugLoggerService : LoggerService },
                PixelService,
                SizeService,
                IconService,
                LabelService
            ]
        };
    }
}
NgxAmapModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                declarations: [
                    NgxAmapComponent,
                    AmapMarkerDirective,
                    AmapInfoWindowComponent,
                    AmapPolylineDirective,
                    AmapToolBarDirective
                ],
                exports: [
                    NgxAmapComponent,
                    AmapMarkerDirective,
                    AmapInfoWindowComponent,
                    AmapPolylineDirective,
                    AmapToolBarDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxAmapModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-amap.js.map


/***/ }),

/***/ "../../../../../src/app/views/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_markdown__ = __webpack_require__("../../../../ngx-markdown/dist/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_amap__ = __webpack_require__("../../../../../dist/ngx-amap/ngx-amap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_amap__["d" /* NgxAmapModule */].forRoot({
                    apiKey: '146f101e824accd6956eeec4937c1a05',
                    urlPath: 'https://webapi.amap.com/maps',
                    debug: false
                }),
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_markdown__["a" /* MarkdownModule */].forRoot()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4_ngx_amap__["d" /* NgxAmapModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_tabs__["a" /* TabsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_markdown__["a" /* MarkdownModule */]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/empty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_empty__ = __webpack_require__("../../../../rxjs/_esm5/observable/empty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_empty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].empty = __WEBPACK_IMPORTED_MODULE_1__observable_empty__["a" /* empty */];
//# sourceMappingURL=empty.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/of.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_of PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].of = __WEBPACK_IMPORTED_MODULE_1__observable_of__["a" /* of */];
//# sourceMappingURL=of.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/empty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return empty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EmptyObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/EmptyObservable.js");
/** PURE_IMPORTS_START ._EmptyObservable PURE_IMPORTS_END */

var empty = __WEBPACK_IMPORTED_MODULE_0__EmptyObservable__["a" /* EmptyObservable */].create;
//# sourceMappingURL=empty.js.map 


/***/ })

});
//# sourceMappingURL=common.chunk.js.map