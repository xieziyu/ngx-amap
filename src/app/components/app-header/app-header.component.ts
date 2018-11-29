import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/observable/of';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { SEARCH_ITEMS } from '../search-items';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
  searchResults$: Observable<any>;
  showResults = false;
  private searchTerms = new Subject<string>();

  // Push a search term into the observable stream.
  search(term: string) {
    console.log(term);
    if (!term.trim()) {
      this.showResults = false;
      return;
    }
    this.searchTerms.next(term);
    this.showResults = true;
  }

  ngOnInit() {
    this.searchResults$ = this.searchTerms.pipe(
      // wait 50ms after each keystroke before considering the term
      debounceTime(50),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => {
        const regx = new RegExp(term.toLowerCase().trim().split('').join('.*'));
        const regxCN = new RegExp(term.trim().split(' ').join('.*'));
        const result = {
          component: [],
          directive: [],
          service: []
        };

        // tslint:disable-next-line:prefer-const
        for (let item of SEARCH_ITEMS) {
          if (regx.test(item.name.toLowerCase())
            || regx.test(item.name.toUpperCase())
            || regxCN.test(item.zhCN)) {
            result[item.type].push(item);
          }
        }

        return Observable.of(result);
      }),
    );
  }
}
