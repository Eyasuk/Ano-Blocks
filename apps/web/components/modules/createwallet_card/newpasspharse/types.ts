import { Dispatch, SetStateAction } from 'react';

export type PassphraseTypes = {
  stateChanger: Dispatch<SetStateAction<1 | 2>>;
};
