import { Dispatch, SetStateAction } from 'react';

export type PasswordTypes = {
  passphrase: string[];
  stateChanger: Dispatch<SetStateAction<1 | 2 | 3>>;
  setPassword: Dispatch<SetStateAction<string>>;
};
