import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.set({ name: 'newname', age: 9999 });

user.on('change', () => {
  console.log('change 1');
});
user.on('change', () => {
  console.log('chagne 2');
});

user.on('save', () => {
  console.log('save was triggered');
});

user.trigger('change');
