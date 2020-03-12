import {
  Input,
  Output,
  EventEmitter,
  Directive,
  OnDestroy,
  SimpleChanges,
  OnChanges,
  NgZone,
} from '@angular/core';
import { zip } from 'rxjs';
import { AmapHeatmapService, AMapHeatmap } from './amap-heatmap.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { getOptions, ChangeFilter } from '../../utils';

const TAG = 'amap-heatmap';
const HeatmapOptions = ['radius', 'gradient', 'opacity', 'zooms'];

@Directive({
  selector: 'amap-heatmap',
  exportAs: 'heatmap',
  providers: [AmapHeatmapService],
})
export class AmapHeatmapDirective implements OnChanges, OnDestroy {
  // ---- Options ----
  /**
   * 热力图中单个点的半径，默认：30，单位：pixel
   */
  @Input() radius: number;
  /**
   * 热力图的渐变区间
   */
  @Input() gradient: { [key: string]: string };
  /**
   * 热力图透明度数组，取值范围[0,1]，0表示完全透明，1表示不透明
   * 默认：[0,1]
   */
  @Input() opacity: [number, number];
  /**
   * 支持的缩放级别范围，取值范围[3-18]
   * 默认：[3,18]
   */
  @Input() zooms: [number, number];
  /**
   * 额外: 是否隐藏
   */
  @Input() hidden = false;
  /**
   * 额外: 会覆盖其他属性的配置方式
   */
  @Input() options: AMapHeatmap.Options;
  /**
   * 额外: 坐标数据集
   */
  @Input() dataset: AMapHeatmap.DataSet;

  // ---- Events ----
  @Output() naReady = new EventEmitter();

  private inited = false;

  constructor(
    protected os: AmapHeatmapService,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {}

  ngOnDestroy() {
    this.os.destroy();
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    const heatmap = this.get();
    if (!this.inited) {
      this.logger.d(TAG, 'initializing ...');
      const options = this.options || getOptions<AMapHeatmap.Options>(this, HeatmapOptions);
      this.logger.d(TAG, 'options:', options);
      this.os.create(options).subscribe(m => {
        this.ngZone.run(() => this.naReady.emit(m));
        this.logger.d(TAG, 'heatmap is ready.');
      });
      this.inited = true;
    } else {
      zip(filter.has<AMapHeatmap.Options>('options'), heatmap).subscribe(([v, p]) =>
        p.setOptions(v || {}),
      );
    }

    zip(filter.notEmpty<AMapHeatmap.DataSet>('dataset'), heatmap).subscribe(([v, p]) => {
      p.setDataSet(v);
    });
    zip(filter.has<boolean>('hidden'), heatmap).subscribe(([v, p]) => (v ? p.hide() : p.show()));
  }

  /**
   * 获取已创建的 AMap.Heatmap 对象
   */
  get() {
    return this.os.get();
  }
}
