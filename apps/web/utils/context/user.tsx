'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { UserLoginInfo } from 'utils/types/userType';
import {
  checkIfUserLogin,
  checkUserSession,
  checkUserWithPassword,
} from 'utils/helpers/userSession';
import { Routes } from 'utils/constants/routes';

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
  const searchParams = useSearchParams();

  const [userLoggedin, setUserLoggedin] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserLoginInfo>(null);
  const [showPasswordModal, setPasswordModal] = useState<boolean>(false);

  const redirectTo = async (path: string): Promise<void> => {
    const user = checkIfUserLogin();
    console.log('log');

    if (!user) {
      console.log(1);

      if (Object.values(Routes.authenticationRoutes).includes(path)) {
        console.log(2);
        return;
        // router.push(path);
        console.log(3);
      } else {
        console.log(4);

        router.push(Routes.authenticationRoutes.intro);
        console.log(5);
      }
      console.log(6);

      return;
    }
    console.log(7);

    if (Object.values(Routes.authenticationRoutes).includes(path)) {
      console.log(path);
      console.log(Object.values(Routes.authorizationRoutes));
      console.log(Object.values(Routes.authorizationRoutes).includes(path));
      console.log(8);

      router.push(Routes.authorizedRoutes.home);
      console.log(9);
      return;
    }
    console.log(10);
    if (userLoggedin) {
      console.log(11);

      return;
    }
    console.log(12);

    const userSession = await checkUserSession();
    console.log(13);

    if (userSession) {
      console.log(14);

      if (typeof userSession.password == 'string') {
        console.log(15);

        const auth = await checkUserWithPassword(userSession.password);
        console.log(16);

        if (
          auth &&
          typeof auth.hdPriv == 'string' &&
          typeof auth.priv == 'string' &&
          typeof auth.pubad == 'string' &&
          typeof auth.pubkey == 'string'
        ) {
          console.log(17);

          const user: UserLoginInfo = {
            hdPriv: auth.hdPriv,
            priv: auth.priv,
            pubad: auth.pubad,
            pubkey: auth.pubkey,
          };
          console.log(18);

          setUserInfo(user);
          console.log(19);

          setUserLoggedin(true);
          console.log(20);
        }
        console.log(21);
      }
      return;
    }
    console.log(22);

    const params = new URLSearchParams(searchParams);
    console.log(23);

    params.set('redirect', path);
    console.log(24);

    const redirect = params;
    console.log(25);

    router.push(`${Routes.authorizationRoutes.auth}?${redirect}`);
    console.log(26);
  };

  useEffect(() => {
    redirectTo(currentPath ?? '/intro');
  }, []);

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
