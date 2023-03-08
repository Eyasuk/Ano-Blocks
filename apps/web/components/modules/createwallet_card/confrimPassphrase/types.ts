import { Dispatch, SetStateAction } from 'react';

export type RandomPassphraseType = {
  postion: number[];
  choosenWords: number[][];
};

export type ConfirmPasspraseProps = {
  passphrase: string[];
  password: string;
  stateChanger: Dispatch<SetStateAction<1 | 2 | 3>>;
};
