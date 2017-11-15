import { Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

export class AMapPlugin {
  protected _id: string;
  protected _subscriptions: Subscription;

  // common property:
  @Input() hidden = false;

  get id() { return this._id; }

  protected _unsubscribeEvents() {
    if (this._subscriptions) {
      this._subscriptions.unsubscribe();
    }
  }
}
