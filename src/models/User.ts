import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  name?: string; //optional chaining in order to set args separately
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
