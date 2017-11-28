import { PlaceSearchOptions } from '../../interface/place-search-options.interface';
import { ILngLat } from '../../interface/lng-lat.interface';
import { callbackFn } from '../../interface/callback.type';
import { SearchResult } from './search-result';

export interface CPlaceSearch {
  new (opts?: PlaceSearchOptions): PlaceSearch;
}

export declare class PlaceSearch {
  constructor(opts?: PlaceSearchOptions);
  search(keyword: string, callback: callbackFn<SearchResult>);
  searchNearBy(keyword: string, center: ILngLat, radius: number, callback: callbackFn<SearchResult>);
  searchInBounds(keyword: string, bounds: any, callback: callbackFn<SearchResult>); // TODO: Bounds, Polygon
  getDetails(POIID: string, callback: callbackFn<SearchResult>);
  setType(type: string);
  setCityLimit(limit: boolean);
  setPageIndex(pageIndex: number);
  setPageSize(setPageSize: number);
  setCity(city: string);
  setLang(lang: string);
  getLang(): string;
  clear();
  poiOnAMAP(obj: IPoiObject);
  detailOnAMAP(obj: IPoiObject);
}

export interface IPoiObject {
  id: string;
  name: string;
  location: ILngLat;
}
