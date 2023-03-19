import jwt from 'jsonwebtoken';
import { UserType } from 'utils/types/userType';
export function encryptUserInfo(userInfo: UserType, password: string) {
  const Key = password;
  jwt.sign(userInfo, password);
}
