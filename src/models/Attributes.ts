import { UserProps } from './User';

export class Attributes<T extends object> {
  constructor(private data: T) {}

  // K: some type … keyoftype
  // K can only be 1 of those 3 type T (…userprops)
  // T[K] object lookup

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

// *keys of an object can be a type as well*

const attrs = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: 'fdsaf',
});
const name = attrs.get('name');
const age = attrs.get('age');
const id = attrs.get('id');
