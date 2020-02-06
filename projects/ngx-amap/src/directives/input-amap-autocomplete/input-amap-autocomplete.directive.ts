import {
  Input,
  Output,
  EventEmitter,
  Directive,
  ElementRef,
  SimpleChanges,
  OnChanges,
  NgZone,
} from '@angular/core';
import { zip } from 'rxjs';
import { AmapAutocompleteService } from '../../services/amap-autocomplete/amap-autocomplete.service';
import { LoggerService } from '../../shared/logger';
import { EventBinderService } from '../../shared/event-binder.service';
import { getOptions, ChangeFilter } from '../../utils';

const TAG = 'amap-autocomplete';
const AutocompleteOptions = ['type', 'city', 'datatype', 'citylimit'];

@Directive({
  selector: 'input[amapAutocomplete]',
})
export class InputAmapAutocompleteDirective implements OnChanges {
  // ---- Options ----
  /**
   * 输入提示时限定POI类型，多个类型用“|”分隔
   */
  @Input() type: string;
  /**
   * 输入提示时限定城市
   */
  @Input() city: string;
  /**
   * 返回的数据类型
   */
  @Input() datatype: AMap.Autocomplete.DataType;
  /**
   * 是否强制限制在设置的城市内搜索
   */
  @Input() citylimit: boolean;

  // ---- Events ----
  @Output() naReady = new EventEmitter();
  @Output() naComplete: EventEmitter<any>;
  @Output() naSelect: EventEmitter<any>;
  @Output() naChoose: EventEmitter<any>;
  @Output() naError: EventEmitter<any>;

  private inited = false;
  constructor(
    protected os: AmapAutocompleteService,
    protected binder: EventBinderService,
    private el: ElementRef,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {
    const target = this.os.get();
    this.naComplete = this.binder.bindEvent(target, 'complete');
    this.naSelect = this.binder.bindEvent(target, 'select');
    this.naChoose = this.binder.bindEvent(target, 'choose');
    this.naError = this.binder.bindEvent(target, 'error');
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    const plugin = this.os.get();
    if (!this.inited) {
      this.logger.d(TAG, 'initializing ...');
      const options = getOptions<AMap.Autocomplete.Options>(this, AutocompleteOptions);
      options.input = this.el.nativeElement;
      this.logger.d(TAG, 'options:', options);
      this.os.create(options).subscribe(m => {
        this.ngZone.run(() => this.naReady.emit(m));
        this.logger.d(TAG, 'autocomplete is ready.');
      });
      this.inited = true;
    } else {
      zip(filter.has<string>('city'), plugin).subscribe(([v, p]) => p.setCity(v));
      zip(filter.has<string>('type'), plugin).subscribe(([v, p]) => p.setType(v));
      zip(filter.has<boolean>('citylimit'), plugin).subscribe(([v, p]) => p.setCityLimit(v));
    }
  }
}
