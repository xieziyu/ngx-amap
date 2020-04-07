'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ngx-amap-demo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NgxAmapModule.html" data-type="entity-link">NgxAmapModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgxAmapModule-ee812865349605b1ef4337fef67ababa"' : 'data-target="#xs-components-links-module-NgxAmapModule-ee812865349605b1ef4337fef67ababa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgxAmapModule-ee812865349605b1ef4337fef67ababa"' :
                                            'id="xs-components-links-module-NgxAmapModule-ee812865349605b1ef4337fef67ababa"' }>
                                            <li class="link">
                                                <a href="components/AmapInfoWindowComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapInfoWindowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AmapTextComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgxAmapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgxAmapComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-NgxAmapModule-ee812865349605b1ef4337fef67ababa"' : 'data-target="#xs-directives-links-module-NgxAmapModule-ee812865349605b1ef4337fef67ababa"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-NgxAmapModule-ee812865349605b1ef4337fef67ababa"' :
                                        'id="xs-directives-links-module-NgxAmapModule-ee812865349605b1ef4337fef67ababa"' }>
                                        <li class="link">
                                            <a href="directives/AmapBezierCurveDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapBezierCurveDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapCircleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapCircleDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapCircleMarkerDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapCircleMarkerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapEllipseDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapEllipseDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapHeatmapDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapHeatmapDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapMarkerClustererDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapMarkerClustererDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapMarkerDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapMarkerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapPolygonDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapPolygonDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapPolylineDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapPolylineDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapRectangleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapRectangleDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AmapToolBarDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AmapToolBarDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/InputAmapAutocompleteDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputAmapAutocompleteDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/UIAwesomeMarkerDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">UIAwesomeMarkerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/UISimpleMarkerDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">UISimpleMarkerDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AMapCircle.html" data-type="entity-link">AMapCircle</a>
                            </li>
                            <li class="link">
                                <a href="classes/AMapOverlay.html" data-type="entity-link">AMapOverlay</a>
                            </li>
                            <li class="link">
                                <a href="classes/AMapPathOverlay.html" data-type="entity-link">AMapPathOverlay</a>
                            </li>
                            <li class="link">
                                <a href="classes/AMapPolygon.html" data-type="entity-link">AMapPolygon</a>
                            </li>
                            <li class="link">
                                <a href="classes/AMapShapeOverlay.html" data-type="entity-link">AMapShapeOverlay</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeFilter.html" data-type="entity-link">ChangeFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UISimpleMarker.html" data-type="entity-link">UISimpleMarker</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AmapAutocompleteService.html" data-type="entity-link">AmapAutocompleteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapBezierCurveService.html" data-type="entity-link">AmapBezierCurveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapCircleMarkerService.html" data-type="entity-link">AmapCircleMarkerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapCircleService.html" data-type="entity-link">AmapCircleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapEllipseService.html" data-type="entity-link">AmapEllipseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapHeatmapService.html" data-type="entity-link">AmapHeatmapService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapInfoWindowService.html" data-type="entity-link">AmapInfoWindowService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AMapLoaderService.html" data-type="entity-link">AMapLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapMarkerClustererService.html" data-type="entity-link">AmapMarkerClustererService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapMarkerService.html" data-type="entity-link">AmapMarkerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapPluginLoaderService.html" data-type="entity-link">AmapPluginLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapPolygonService.html" data-type="entity-link">AmapPolygonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapPolylineService.html" data-type="entity-link">AmapPolylineService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapRectangleService.html" data-type="entity-link">AmapRectangleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AMapService.html" data-type="entity-link">AMapService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapTextService.html" data-type="entity-link">AmapTextService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapToolBarService.html" data-type="entity-link">AmapToolBarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AmapUILoaderService.html" data-type="entity-link">AmapUILoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DebugLoggerService.html" data-type="entity-link">DebugLoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventBinderService.html" data-type="entity-link">EventBinderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IconService.html" data-type="entity-link">IconService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerService.html" data-type="entity-link">LoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MarkerLabelService.html" data-type="entity-link">MarkerLabelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PixelService.html" data-type="entity-link">PixelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PluginLoaderService.html" data-type="entity-link">PluginLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SizeService.html" data-type="entity-link">SizeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UIAwesomeMarkerService.html" data-type="entity-link">UIAwesomeMarkerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UISimpleMarkerService.html" data-type="entity-link">UISimpleMarkerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AutocompleteSearchResult.html" data-type="entity-link">AutocompleteSearchResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link">Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataSet.html" data-type="entity-link">DataSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Getter.html" data-type="entity-link">Getter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IIcon.html" data-type="entity-link">IIcon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMarkerLabel.html" data-type="entity-link">IMarkerLabel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISize.html" data-type="entity-link">ISize</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NgxAmapConfig.html" data-type="entity-link">NgxAmapConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Options.html" data-type="entity-link">Options</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Options-1.html" data-type="entity-link">Options</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Options-2.html" data-type="entity-link">Options</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Options-3.html" data-type="entity-link">Options</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Options-4.html" data-type="entity-link">Options</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Options-5.html" data-type="entity-link">Options</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PixelOptions.html" data-type="entity-link">PixelOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchResult.html" data-type="entity-link">SearchResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StyleObject.html" data-type="entity-link">StyleObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tip.html" data-type="entity-link">Tip</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WithCreate.html" data-type="entity-link">WithCreate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WithEditor.html" data-type="entity-link">WithEditor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});