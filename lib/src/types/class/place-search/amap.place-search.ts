import { PlaceSearchOptions } from '../../interface/place-search-options.interface';
import { ILngLat } from '../../interface/lng-lat.interface';
import { callbackFn } from '../../interface/callback.type';
import { SearchResult } from './search-result';
import { Bounds } from '../amap.bounds';
import { Polygon } from '../overlays/amap.polygon';

export interface CPlaceSearch {
  new (opts?: PlaceSearchOptions): PlaceSearch;
}

export interface PlaceSearch {
  search(keyword: string, callback: callbackFn<SearchResult>);
  searchNearBy(keyword: string, center: ILngLat, radius: number, callback: callbackFn<SearchResult>);
  searchInBounds(keyword: string, bounds: Bounds|Polygon, callback: callbackFn<SearchResult>);
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
