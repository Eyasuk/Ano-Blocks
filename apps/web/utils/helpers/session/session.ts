import type { IronSessionOptions } from 'iron-session';

export const sessionOptions: IronSessionOptions = {
  password: (process.env.s as string) ?? 'a',
  cookieName: 'ano+blocks+wallet',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

declare module 'iron-session' {
  interface IronSessionData {
    // user?: User;
  }
}
