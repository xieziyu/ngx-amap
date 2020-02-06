import {
  Component,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  ElementRef,
  NgZone,
} from '@angular/core';
import { zip, Subscription, Observable } from 'rxjs';
import { LoggerService } from '../../shared/logger';
import { EventBinderService } from '../../shared/event-binder.service';
import { getOptions, ChangeFilter } from '../../utils';
import { AmapInfoWindowService } from './amap-info-window.service';
import { IPixel, ISize } from '../../interfaces';
import { PixelService } from '../../shared/pixel.service';
import { SizeService } from '../../shared/size.service';
import { AMapService } from '../../shared/amap.service';

const TAG = 'amap-info-window';
const ALL_OPTIONS = [
  'isCustom',
  'autoMove',
  'closeWhenClickMap',
  'content',
  'size',
  'anchor',
  'offset',
  'position',
  'showShadow',
];

@Component({
  selector: 'amap-info-window',
  templateUrl: './amap-info-window.component.html',
  styleUrls: ['./amap-info-window.component.scss'],
  providers: [AmapInfoWindowService],
})
export class AmapInfoWindowComponent implements OnChanges, OnDestroy {
  // ---- Options ----
  /**
   * 是否自定义窗体
   */
  @Input() isCustom: boolean;
  /**
   * 是否自动调整窗体到视野内
   */
  @Input() autoMove: boolean;
  /**
   * 控制是否在鼠标点击地图后关闭信息窗体
   */
  @Input() closeWhenClickMap: boolean;
  /**
   * 显示内容
   */
  @Input() content: string | HTMLElement;
  /**
   * 信息窗体尺寸
   */
  @Input() size: AMap.SizeValue | ISize;
  /**
   * 信息窗体锚点
   */
  @Input() anchor: AMap.InfoWindow.Anchor;
  /**
   * 信息窗体显示位置偏移量
   */
  @Input() offset: AMap.Pixel | IPixel;
  /**
   * 信息窗体显示基点位置
   */
  @Input() position: AMap.LocationValue;
  /**
   * 是否显示信息窗体阴影
   */
  @Input() showShadow: boolean;
  /**
   * 额外：是否开启
   */
  @Input() isOpen = false;
  // ---- Events ----
  @Output() naReady = new EventEmitter();
  @Output() naOpen: EventEmitter<any>;
  @Output() naClose: EventEmitter<any>;
  @Output() naChange: EventEmitter<any>;
  @Output() isOpenChange = new EventEmitter<boolean>();

  hostMarker: Observable<AMap.Marker | AMap.Text>;
  private inited = false;
  private subscriptions: Subscription;

  constructor(
    protected os: AmapInfoWindowService,
    protected binder: EventBinderService,
    private amaps: AMapService,
    private el: ElementRef,
    private logger: LoggerService,
    private pixels: PixelService,
    private sizes: SizeService,
    private ngZone: NgZone,
  ) {
    const w = this.os.get();
    this.naOpen = this.binder.bindEvent(w, 'open');
    this.naClose = this.binder.bindEvent(w, 'close');
    this.naChange = this.binder.bindEvent(w, 'change');
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    const iw = this.get();
    if (!this.inited) {
      this.amaps.get().subscribe(() => {
        this.logger.d(TAG, 'initializing ...');
        // bind isOpenChange events:
        this.subscriptions = this.binder.bindEvent(iw, 'open').subscribe(() => {
          if (!this.isOpen) {
            this.isOpen = true;
            this.isOpenChange.emit(true);
          }
        });
        this.subscriptions.add(
          this.binder.bindEvent(iw, 'close').subscribe(() => {
            if (this.isOpen) {
              this.isOpen = false;
              this.isOpenChange.emit(false);
            }
          }),
        );
        this.content = this.content
          ? this.content
          : this.el.nativeElement.querySelector('.amap-info-window-content');
        const options = getOptions<AMap.InfoWindow.Options>(this, ALL_OPTIONS);
        if (this.offset) {
          options.offset = this.pixels.create(this.offset);
        }
        if (this.size) {
          options.size = this.sizes.create(this.size);
        }
        this.logger.d(TAG, 'options:', options);
        this.os.create(options).subscribe(m => {
          this.ngZone.run(() => {
            this.toggleOpen();
            this.naReady.emit(m);
          });
          this.logger.d(TAG, 'InfoWindow is ready.');
        });
        this.inited = true;
      });
    } else {
      filter.has<boolean>('isOpen').subscribe(() => this.toggleOpen());
      zip(filter.has<any>('content'), iw).subscribe(([v, w]) => w.setContent(v));
      zip(filter.notEmpty<AMap.LocationValue>('position'), iw).subscribe(([v, w]) =>
        w.setPosition(v),
      );
      zip(filter.notEmpty<AMap.SizeValue | ISize>('size'), iw).subscribe(([v, w]) =>
        w.setSize(this.sizes.create(v)),
      );
      zip(filter.notEmpty<AMap.InfoWindow.Anchor>('anchor'), iw).subscribe(([v, w]) =>
        w.setAnchor(v),
      );
    }
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    this.os.destroy();
  }

  /**
   * 获取已创建的 AMap.InfoWindow 对象
   */
  get() {
    return this.os.get();
  }

  /**
   * 开关窗体
   */
  toggleOpen() {
    this.logger.d(TAG, 'toggle open');
    this.isOpen ? this.open() : this.close();
  }

  /**
   * 打开窗体
   */
  open() {
    if (this.hostMarker) {
      this.os.openOnMark(this.hostMarker);
    } else {
      this.os.open();
    }
  }

  /**
   * 关闭窗体
   */
  close() {
    this.os.close();
  }
}
