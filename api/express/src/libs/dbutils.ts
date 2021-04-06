import { NotFoundError } from '.';

export const getPage = <T>(items: T[], page: number = 1, quantity: number = 10): T[] => {
  quantity = quantity <= 0 ? 10 : quantity;
  const first = (page > 1 ? page - 1 : 0) * quantity;
  return items.slice(first, quantity);
};

export const getItem = <T>(items: T[], compare: (item: T) => boolean) => {
  const index = items.findIndex((i) => compare(i));
  if (index === -1) throw new NotFoundError();
  return { ...items[index] };
};

/**
 * Determines the next unique id.
 * @param items An array of items.
 * @returns A new ID value.
 */
export const generateId = (items: any[]): number => {
  const maxId = items.map((u) => u.id).reduce((a, b) => Math.max(a, b));
  return maxId + 1;
};

export const addItem = <T>(items: T[], item: T): T => {
  const id = generateId(items);
  const _item = { ...item, id };
  items.push(_item);
  return _item;
};

export const updateItem = <T>(items: T[], item: T, compare: (item: T) => boolean): T => {
  const _item = { ...item };
  const index = items.findIndex((i) => compare(i));
  if (index === -1) throw new NotFoundError();
  items[index] = _item;
  return _item;
};

export const removeItem = <T>(items: T[], item: T, compare: (item: T) => boolean): T => {
  const index = items.findIndex((i) => compare(i));
  if (index === -1) throw new NotFoundError();
  items = items.splice(index, 1);
  return item;
};
