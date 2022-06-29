import { atom } from 'recoil';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'some text state', // default value (aka initial value)
});
