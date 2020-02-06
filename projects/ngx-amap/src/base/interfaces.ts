import { Observable } from 'rxjs';

export interface Getter<T> {
  get(): Observable<T>;
}

export interface WithEditor<T, E> extends Getter<T> {
  getEditor(): Observable<E>;
}

export interface WithCreate<T> extends Getter<T> {
  create(options: any): Observable<T>;
  destroy(): void;
}
