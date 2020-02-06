import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  NgZone,
} from '@angular/core';
import { zip } from 'rxjs';
import { AmapToolBarService } from './amap-tool-bar.service';
import { LoggerService } from '../../shared/logger';
import { EventBinderService } from '../../shared/event-binder.service';
import { getOptions, ChangeFilter } from '../../utils';
import { IPixel } from '../../interfaces';
import { PixelService } from '../../shared/pixel.service';
import { AMapService } from '../../shared/amap.service';

const TAG = 'amap-tool-bar';
const ToolBarOptions = [
  'offset',
  'position',
  'ruler',
  'noIpLocate',
  'locate',
  'liteStyle',
  'direction',
  'autoPosition',
  'locationMarker',
  'useNative',
];

@Directive({
  selector: 'amap-tool-bar',
  exportAs: 'tool-bar',
  providers: [AmapToolBarService],
})
export class AmapToolBarDirective implements OnInit, OnChanges, OnDestroy {
  // ---- Options ----
  /**
   * 相对于地图容器左上角的偏移量
   */
  @Input() offset: AMap.Pixel | IPixel;
  /**
   * 控件停靠位置
   * LT: 左上角
   * RT: 右上角
   * LB: 左下角
   * RB: 右下角
   */
  @Input() position: AMap.ToolBar.Position;
  /**
   * 标尺键盘是否可见
   */
  @Input() ruler: boolean;
  /**
   * 定位失败后，是否开启 IP 定位
   */
  @Input() noIpLocate: boolean;
  /**
   * 是否显示定位按钮
   */
  @Input() locate: boolean;
  /**
   * 是否使用精简模式
   */
  @Input() liteStyle: boolean;
  /**
   * 方向键盘是否可见
   */
  @Input() direction: boolean;
  /**
   * 是否自动定位，即地图初始化加载完成后，是否自动定位的用户所在地，仅在支持 HTML5 的浏览器中有效
   */
  @Input() autoPosition: boolean;
  /**
   * 自定义定位图标，值为 Marker 对象
   */
  @Input() locationMarker: AMap.Marker;
  /**
   * 是否使用高德定位 SDK 用来辅助优化定位效果
   */
  @Input() useNative: boolean;
  /**
   * 额外: 是否隐藏
   */
  @Input() hidden = false;

  // amap-tool-bar events:
  @Output() naReady = new EventEmitter();
  @Output() naShow: EventEmitter<any>;
  @Output() naHide: EventEmitter<any>;
  @Output() naLocation: EventEmitter<any>;
  @Output() naZoomChanged: EventEmitter<any>;

  private inited = false;

  constructor(
    protected os: AmapToolBarService,
    protected binder: EventBinderService,
    private amaps: AMapService,
    private pixels: PixelService,
    private logger: LoggerService,
    private ngZone: NgZone,
  ) {
    const target = this.os.get();
    this.naShow = this.binder.bindEvent(target, 'show');
    this.naHide = this.binder.bindEvent(target, 'hide');
    this.naLocation = this.binder.bindEvent(target, 'location');
    this.naZoomChanged = this.binder.bindEvent(target, 'zoomchanged');
  }

  ngOnDestroy() {
    this.os.destroy();
  }

  ngOnInit() {
    this.amaps.get().subscribe(() => {
      this.logger.d(TAG, 'initializing ...');
      const options = getOptions<AMap.ToolBar.Options>(this, ToolBarOptions);
      if (this.offset) {
        options.offset = this.pixels.create(this.offset);
      }
      this.logger.d(TAG, 'options:', options);
      this.os.create(options).subscribe(m => {
        this.ngZone.run(() => this.naReady.emit(m));
        this.logger.d(TAG, 'toolbar is ready.');
      });
      this.inited = true;
      this.get().subscribe(m => {
        this.hidden ? m.hide() : m.show();
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    const toolbar = this.get();
    if (!this.inited) {
      return;
    }
    zip(filter.notEmpty<AMap.Pixel | IPixel>('offset'), toolbar).subscribe(([v, m]) =>
      m.setOffset(this.pixels.create(v)),
    );
    zip(filter.has<boolean>('hidden'), toolbar).subscribe(([v, m]) => (v ? m.hide() : m.show()));
  }

  /**
   * 获取已创建的 AMap.ToolBar 对象
   */
  get() {
    return this.os.get();
  }

  doLocation() {
    this.os.get().subscribe(toolbar => {
      toolbar.doLocation();
    });
  }
}
