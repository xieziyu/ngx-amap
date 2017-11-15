import { EventListener } from './amap.event-listener';

export interface AMapEvent {
  addDomListener(instance: any, eventName: string, handler: (event?: any) => void, context?: any): EventListener; // TODO: EventListener
  addListener(instance: any, eventName: string, handler: (event?: any) => void, context?: any): EventListener; // TODO: EventListener
  addListenerOnce(instance: any, eventName: string, handler: (event?: any) => void, context?: any): EventListener; // TODO: EventListener
  removeListener(listener: EventListener): void;  // TODO: EventListener
  trigger(instance: any, eventName: string, extArgs): void;
}
