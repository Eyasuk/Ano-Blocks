import { Dispatch, SetStateAction } from 'react';

export type PasswordTypes = {
  stateChanger: Dispatch<SetStateAction<1 | 2>>;
};
