import { PoiList } from './poi-list';
import { CityInfo } from './city-info';

export interface SearchResult {
  info: string;
  poiList: PoiList;
  keywordList: string[];
  cityList: CityInfo[];
}
