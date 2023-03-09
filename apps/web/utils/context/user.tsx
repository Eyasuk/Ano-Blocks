'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { redirect, useRouter, usePathname } from 'next/navigation';
import { UserLoginInfo } from 'utils/types/userType';
import { checkIfUserLogin } from 'utils/helpers/userSession';
import { Router } from 'next/router';

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
  const router = useRouter();
  const currentPath = usePathname();
  const [userLoggedin, setUserLoggedin] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserLoginInfo>(null);
  const [showPasswordModal, setPasswordModal] = useState<boolean>(false);

  //check cookies
  //if then set password modal
  //if password correct set user info
  //set login true
  const redirectTo = (path: string): void => {
    const user = checkIfUserLogin();
    if (!user) {
      if (path === '/intro' || path === '/new' || path === '/import') {
        router.push(path);
      } else {
        router.push('/intro');
      }
    } else {
      if (path === '/intro' || path === '/new' || path === '/import') {
        router.push('/');
      } else if (!userLoggedin) {
        router.push('/auth');
      }
    }
  };
  useEffect(() => {
    redirectTo(currentPath ?? '/intro');
  }, [currentPath]);

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
