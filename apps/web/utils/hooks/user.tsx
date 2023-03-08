'use client';
import React, { createContext, useContext, useState } from 'react';
import { UserLoginInfo } from 'utils/types/userType';

interface UserState {
  userLoggedin: boolean;
  showPasswordModal: boolean;
  setPasswordModal(showPasswordModal: boolean): void;
  setUserLoggedin(userLoggedin: boolean): void;
  userInfo: UserLoginInfo;
  setUserInfo(userInfo: UserLoginInfo): void;
}

const defaultUserState: UserState = {
  userLoggedin: false,
  showPasswordModal: false,
  setPasswordModal: () => {},
  setUserLoggedin: () => {},
  userInfo: null,
  setUserInfo: () => {},
};

const UserContext = createContext(defaultUserState);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
  const [userLoggedin, setUserLoggedin] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserLoginInfo>(null);
  const [showPasswordModal, setPasswordModal] = useState<boolean>(false);

  //check cookies
  //if then set password modal
  //if password correct set user info
  //set login true
  return (
    <UserContext.Provider
      value={{
        userLoggedin,
        setUserLoggedin,
        showPasswordModal,
        userInfo,
        setUserInfo,
        setPasswordModal,
      }}
    >
      {children}{' '}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
