import React, { createContext, useContext, useState } from 'react';

interface UserState {
  userLoggedin: boolean;
  setUserLoggedin(userLoggedin: boolean): void;
}

const defaultUserState: UserState = {
  userLoggedin: false,
  setUserLoggedin: () => {},
};

const UserContext = createContext(defaultUserState);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
  const [userLoggedin, setUserLoggedin] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ userLoggedin, setUserLoggedin }}>
      {children}{' '}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
