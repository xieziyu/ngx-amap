export declare class AMapEvent {
  addDomListener(instance: any, eventName: string, handler: (event?: any) => void, context?: any): EventListener;
  addListener(instance: any, eventName: string, handler: (event?: any) => void, context?: any): EventListener;
  addListenerOnce(instance: any, eventName: string, handler: (event?: any) => void, context?: any): EventListener;
  removeListener(listener: EventListener): void;
  trigger(instance: any, eventName: string, extArgs): void;
}
