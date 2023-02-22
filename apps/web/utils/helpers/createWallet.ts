import { generateMnemonic, mnemonicToSeed } from 'ethereum-cryptography/bip39';
import { wordlist } from 'ethereum-cryptography/bip39/wordlists/english';

export function generatePassPhrase(): string[] {
  const m = generateMnemonic(wordlist);
  const mnemonicArray = m.split(' ');
  return mnemonicArray;
}

export async function generateSeed(memonic: string): Promise<string> {
  const seed = await mnemonicToSeed(memonic);
  const seedString = Buffer.from(seed).toString('hex');
  return seedString;
}
