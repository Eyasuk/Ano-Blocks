import { createContext, useContext, useState } from "react";
import { Curriences } from "utils/constants/currencies";

interface SettingProps {
  currencyConversion: "f" | "f";
  primaryCurrency: "Matic" | "Fiat";
  language: string;
  hideAssets: boolean;
  lockerTimer: number;
}

interface SettingState {
  userSetting: SettingProps;
  setUserSetting(settings: SettingProps): void;
}

const defaultSettingState: SettingState = {
  userSetting: {
    currencyConversion: "f",
    primaryCurrency: "Matic",
    language: "d",
    hideAssets: false,
    lockerTimer: 2,
  },
  setUserSetting: () => {},
};

Curriences.map((items: any, index: number) => {
  return items.name;
});

const UserSettingContext = createContext(defaultSettingState);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
  const [userSetting, setUserSetting] = useState<SettingProps>(
    defaultSettingState.userSetting
  );

  return (
    <UserSettingContext.Provider value={{ userSetting, setUserSetting }}>
      {children}{" "}
    </UserSettingContext.Provider>
  );
};

export const useUser = () => useContext(UserSettingContext);
