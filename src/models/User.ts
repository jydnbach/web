import { Model } from '../Model';

export interface UserProps {
  id?: number;
  name?: string; //optional chaining in order to set args separately
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {}
