export const isEmpty = (obj: { [key: string]: unknown }): boolean =>
  Object.keys(obj).length === 0 && Object.values(obj).length === 0;
