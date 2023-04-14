//from network constant
// for know then set it to
import { createContext, useContext } from 'react';
import { Rpcs } from 'utils/constants/rpcProvider';

interface UserState {
  userLoggedin: boolean;
  showPasswordModal: boolean;
  setPasswordModal(showPasswordModal: boolean): void;
  setUserLoggedin(userLoggedin: boolean): void;
  // userInfo: UserLoginInfo;
  // setUserInfo(userInfo: UserLoginInfo): void;
}

const defaultUserState: UserState = {
  userLoggedin: false,
  showPasswordModal: false,
  setPasswordModal: () => {},
  setUserLoggedin: () => {},
  // userInfo: null,
  // setUserInfo: () => {},
};

const UserContext = createContext(defaultUserState);

interface UserProviderProps {
  children: React.ReactNode;
}

// export const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
// return <UserContext.Provider value={}>{children} </UserContext.Provider>;
// /};

export const useUser = () => useContext(UserContext);
