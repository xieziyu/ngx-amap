import { AutocompleteOptions } from '../../interface/autocomplete-options.interface';

export interface CAutocomplete {
  new (opts?: AutocompleteOptions): Autocomplete;
}

export declare class Autocomplete {
  constructor(opts?: AutocompleteOptions);
  search(keyword: string, callback: (status: string, result: any) => void);
  setType(type: string);
  setCity(city: string);
  setCityLimit(limit: boolean);
}
