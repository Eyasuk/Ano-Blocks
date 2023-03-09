import { SignJWT, jwtVerify, jwtDecrypt, base64url } from 'jose';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { ResponseType } from '../types/responseType';
import { UserLoginInfo } from 'utils/types/userType';

export async function signUp(
  data: UserLoginInfo,
  password: string
): Promise<string> {
  //const signData = sign(data, password, { expiresIn: 31556926 });
  const passwordUint = new TextEncoder().encode(password);
  const alg = 'HS256';
  const jwt = await new SignJWT({ ...data })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer('urn:ano:issuer')
    .setAudience('urn:ano:audience')
    .setExpirationTime('2h')
    .sign(passwordUint);

  setCookie('userData', jwt, { maxAge: 90000 * 365 });
  return jwt;
}

export function checkIfUserLogin() {
  //check cookies
  const cookie = getCookie('userData');
  if (!cookie) return false;
  return cookie.toString();

  //if then set password modal
  //if password correct set user info
  //set login true
}

export async function checkUserWithPassword(password: string) {
  const cookie = getCookie('userData');
  if (!cookie) return false;
  const secret = new TextEncoder().encode(password);
  try {
    const { payload } = await jwtVerify(cookie.toString(), secret);
    return payload;
  } catch (e) {
    return false;
  }
}

export function logout() {
  deleteCookie('userData');
}
