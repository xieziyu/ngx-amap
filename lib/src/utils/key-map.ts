interface IKeyMap<T> {
  [key: string]: T;
}

export class KeyMap<T> {
  private _map: IKeyMap<T> = Object.create(null);
  private _size = 0;

  get size() { return this._size; }

  set(key: string, value: T): KeyMap<T> {
    if (this._map[key] === undefined && value !== undefined) {
      this._size++;
    }

    this._map[key] = value;
    return this;
  }

  get(key: string) {
    return this._map[key];
  }

  delete(key: string) {
    const value = this._map[key];

    if (value !== undefined) {
      this._size--;
    }

    delete this._map[key];
    return value;
  }

  has(key: string) {
    return (this._map[key] !== undefined);
  }

  clear() {
    this._map = Object.create(null);
    this._size = 0;
  }

  keys() {
    return Object.keys(this._map);
  }

  values() {
    return Object.keys(this._map).map(key => this._map[key]);
  }

  entries() {
    return Object.keys(this._map).map(key => [key, this._map[key]]);
  }
}
