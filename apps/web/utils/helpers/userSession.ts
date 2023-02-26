import { sign } from 'jsonwebtoken';
import { ResponseType } from '../types/responseType';

export function login(data: object, password: string): string {
  const signData = sign(data, password, { expiresIn: 31556926 });
  return signData;
}
