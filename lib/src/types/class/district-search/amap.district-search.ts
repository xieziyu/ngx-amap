import { DistrictSearchOptions } from '../../interface/district-search-options.interface';
import { callbackFn } from '../../interface/callback.type';
import { DistrictSearchResult } from './district-search-result';

export interface CDistrictSearch {
  new (opts?: DistrictSearchOptions): DistrictSearch;
}

export interface DistrictSearch {
  search(
    keyword: string,
    callback: callbackFn<DistrictSearchResult>,
    opts?: DistrictSearchOptions
  );
  setLevel(level: string);
  setSubdistrict(district: number);
}

