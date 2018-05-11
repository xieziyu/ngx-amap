import { Tip } from './tip';

export interface AutocompleteResult {
  info: string;
  count: number;
  tips: Tip[];
}
