export class Utils {
  static getOptionsFor<T>(component: any, keys: string[]): T {
    const options: any = {};

    keys.forEach(key => {
      if (this[key] !== undefined && this[key] !== null) {
        options[key] = this[key];
      }
    });

    return options;
  }
}
