export function getOptions<T>(component: any, keys: string[]): T {
  const options: any = {};

  keys.forEach(key => {
    if (component[key] !== undefined && component[key] !== null) {
      options[key] = component[key];
    }
  });

  return options;
}
