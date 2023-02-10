import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextApiRequest } from 'next';
import { ResponseType } from 'utils/types/responseType';

const KEY = process.env.JWT_KEY ?? '';

export function verfiyToken(jwtToken: string) {
  try {
    return jwt.verify(jwtToken, KEY);
  } catch (error) {
    return null;
  }
}

// export function getAppCookies() {
//   // return parsedItems;
// }

// export function setAppCookies(
//   payload: any,
//   password: string,
//   encypted: string
// ): ResponseType {
//   bcrypt.compare(password, encypted, (err, result) => {
//     if (result) {
//       const token = jwt.sign(payload, password, { expiresIn: '1hr' });
//       return { success: true, data: { token } };
//     }
//   });

//   return { success: false, data: {} };
// }

export function signUp(password: string, privateKey: string, link: string) {
  bcrypt.genSalt(10, function (_err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      if (!err) {
        const token = jwt.sign({ key: privateKey }, password);
        const tempToken = jwt.sign({ link: link }, KEY, {
          expiresIn: '1h',
        });

        return { success: true, data: { token, tempToken, hash } };
      }
    });
  });
  return { success: false, data: {} };
}

export function absoluteUrl(req: NextApiRequest, setLocalhost: string) {
  var protocol = 'https:';
  var host = req
    ? req.headers['x-forwarded-host'] || req.headers['host']
    : window.location.host;
  if (host && host.indexOf('localhost') > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = 'http:';
  }
  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host,
    url: req,
  };
}
