import {
  generateMnemonic,
  mnemonicToSeedSync,
} from 'ethereum-cryptography/bip39';
import { wordlist } from 'ethereum-cryptography/bip39/wordlists/english';

export function generatePassPhrase(): string[] {
  const m = generateMnemonic(wordlist);
  const mnemonicArray = m.split(' ');
  return mnemonicArray;
}
