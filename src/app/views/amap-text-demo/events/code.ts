export const HTML = `
<ngx-amap class="demo-map" [resizeEnable]="true" [center]="[116.397428, 39.90923]" [zoom]="13">
  <amap-text [position]="[116.397428, 39.90923]" [draggable]="true"
    (ready)="onEvent($event, 'ready')"
    (textClick)="onEvent($event, 'textClick')"
    (dblClick)="onEvent($event, 'dblClick')"
    (rightClick)="onEvent($event, 'rightClick')"
    (mouseMove)="onEvent($event, 'mouseMove')"
    (mouseOver)="onEvent($event, 'mouseOver')"
    (mouseOut)="onEvent($event, 'mouseOut')"
    (mouseDown)="onEvent($event, 'mouseDown')"
    (mouseUp)="onEvent($event, 'mouseUp')"
    (dragStart)="onEvent($event, 'dragStart')"
    (dragging)="onEvent($event, 'dragging')"
    (dragEnd)="onEvent($event, 'dragEnd')"
    (touchStart)="onEvent($event, 'touchStart')"
    (touchMove)="onEvent($event, 'touchMove')"
    (touchEnd)="onEvent($event, 'touchEnd')"
    (moving)="onEvent($event, 'moving')"
    (moveend)="onEvent($event, 'moveend')"
    (movealong)="onEvent($event, 'movealong')"
  ></amap-text>
</ngx-amap>`;
