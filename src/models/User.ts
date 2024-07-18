interface UserProps {
  name?: string; //optional chaining in order to set args separately
  age?: number;
}

//type alias
type Callback = () => {};

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {}
}
