import { Directive, Input, Output, OnDestroy, OnInit,
  EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggerService } from '../../services/logger/logger.service';
import { Heatmap, Map, HeatmapData } from '../../types/class';
import { HeatmapOptions } from '../../types/interface';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';
import { HeatmapService } from '../../services/heatmap/heatmap.service';

const ALL_OPTIONS = [
  'radius',
  'gradient',
  'opacity',
  'zooms'
];

@Directive({
  selector: 'amap-heatmap',
  exportAs: 'heatmap'
})
export class AmapHeatmapDirective implements OnChanges, OnInit, OnDestroy {
  TAG = 'amap-heatmap';

  // These properties are supported in HeatmapOptions:
  @Input() radius: number;
  @Input() gradient: any;
  @Input() opacity: number[];
  @Input() zooms: number[];

  // This options property will override other property:
  @Input() options: HeatmapOptions;
  @Input() dataset: HeatmapData;

  // Extra property:
  @Input() hidden = false;

  // amap-tool-bar events:
  @Output() ready = new EventEmitter();

  private _heatmap: Promise<Heatmap>;
  private _subscriptions: Subscription;

  constructor(
    private logger: LoggerService,
    private hms: HeatmapService
  ) {}

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);

    if (!this._heatmap) {
      const options = this.options || Utils.getOptionsFor<HeatmapOptions>(this, ALL_OPTIONS);
      this._heatmap = this.hms.create(options);
      this.bindEvents();
      this._heatmap.then(t => this.ready.emit(t));
      this.hidden ? this.hide() : this.show();
    } else {
      filter.has<HeatmapOptions>('options').subscribe(v => this.setOptions(v || {}));
    }

    filter.notEmpty<HeatmapData>('dataset').subscribe(v => this.setDataSet(v));
    filter.has<boolean>('hidden').subscribe(v => v ? this.hide() : this.show());
  }

  ngOnDestroy() {
    this.unbindEvents();
    this.hms.destroy(this._heatmap);
  }

  private bindEvents() {
  }

  private bindHeatmapEvent(event: string) {
    return this.hms.bindEvent(this._heatmap, event);
  }

  private unbindEvents() {
  }

  // Public methods:
  show(): Promise<void> {
    return this._heatmap.then(t => t.show());
  }

  hide(): Promise<void> {
    return this._heatmap.then(t => t.hide());
  }

  // Setters:
  setOptions(opt: HeatmapOptions): Promise<void> {
    return this._heatmap.then(p => p.setOptions(opt));
  }

  setDataSet(data: HeatmapData): Promise<void> {
    return this._heatmap.then(p => p.setDataSet(data));
  }

  // Getters:
  getDataSet(): Promise<any> {
    return this._heatmap.then(t => t.getDataSet());
  }

  getMap(): Promise<Map> {
    return this._heatmap.then(t => t.getMap());
  }
}
