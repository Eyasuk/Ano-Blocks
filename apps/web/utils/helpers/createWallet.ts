import { generateMnemonic, mnemonicToSeed } from 'ethereum-cryptography/bip39';
import { sha256 } from 'ethereum-cryptography/sha256';
import { toHex } from 'ethereum-cryptography/utils';
import { wordlist } from 'ethereum-cryptography/bip39/wordlists/english';

export function generatePassPhrase(): string[] {
  const m = generateMnemonic(wordlist);
  const mnemonicArray = m.split(' ');
  return mnemonicArray;
}

export async function generateSeed(memonic: string): Promise<string> {
  const seed = await mnemonicToSeed(memonic);
  //Sconst seedString = Buffer.from(seed).toString('hex');
  const seedString = toHex(sha256(seed));
  return seedString;
}
