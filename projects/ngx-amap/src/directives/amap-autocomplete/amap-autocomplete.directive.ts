import {
  Directive, Input, Output, OnDestroy, OnInit, ElementRef,
  EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggerService } from '../../services/logger/logger.service';
import { AutocompleteOptions } from '../../types/interface';
import { AmapAutocompleteService, AmapAutocompleteWrapper } from '../../services/amap-autocomplete/amap-autocomplete.service';
import { Utils } from '../../utils/utils';
import { ChangeFilter } from '../../utils/change-filter';

const ALL_OPTIONS = [
  'type',
  'city',
  'datatype',
  'citylimit'
];

@Directive({
  selector: 'input[amapAutocomplete]'
})
export class AmapAutocompleteDirective implements OnChanges, OnInit, OnDestroy {
  TAG = 'amap-autocomplete';

  /** 输入提示时限定POI类型，多个类型用“|”分隔，默认值：所有类别 */
  @Input() type: string;
  /** 输入提示时限定城市 */
  @Input() city: string;
  /** 返回的数据类型 */
  @Input() datatype: string;
  /** 是否强制限制在设置的城市内搜索 */
  @Input() citylimit: boolean;

  /** 插件载入完毕时触发 */
  @Output() ready = new EventEmitter();
  /** Autocomplete插件触发complete事件时触发 */
  @Output() complete = new EventEmitter();
  /** Autocomplete插件触发error事件时触发 */
  @Output() error = new EventEmitter();
  /** Autocomplete插件触发select事件时触发 */
  @Output() select = new EventEmitter();
  /** Autocomplete插件触发choose事件时触发 */
  @Output() choose = new EventEmitter();

  private _subscription: Subscription;
  private _plugin: Promise<AmapAutocompleteWrapper>;

  constructor(
    private logger: LoggerService,
    private autos: AmapAutocompleteService,
    private el: ElementRef
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this._plugin) {
      const filter = ChangeFilter.of(changes);
      filter.has<string>('city').subscribe(v => this.setCity(v));
      filter.has<string>('type').subscribe(v => this.setType(v));
      filter.has<boolean>('citylimit').subscribe(v => this.setCityLimit(v));
    }
  }

  ngOnInit() {
    const options = Utils.getOptionsFor<AutocompleteOptions>(this, ALL_OPTIONS);
    options.input = this.el.nativeElement;
    this._plugin = this.autos.of(options);
    this._plugin.then(wrapper => {
      this.bindEvents(wrapper);
      this.ready.emit(wrapper);
    });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  private bindEvents(wrapper: AmapAutocompleteWrapper) {
    this._subscription = wrapper.on('complete').subscribe(e => this.complete.emit(e));
    this._subscription.add(wrapper.on('error').subscribe(e => this.error.emit(e)));
    this._subscription.add(wrapper.on('select').subscribe(e => this.select.emit(e)));
    this._subscription.add(wrapper.on('choose').subscribe(e => this.choose.emit(e)));
  }

  // Setters
  setCity(city: string) {
    return this._plugin.then(wrapper => wrapper.setCity(city));
  }

  setType(type: string) {
    return this._plugin.then(wrapper => wrapper.setType(type));
  }

  setCityLimit(limit: boolean) {
    return this._plugin.then(wrapper => wrapper.setCityLimit(limit));
  }
}
