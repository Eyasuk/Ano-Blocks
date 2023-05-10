import { useEffect } from "react";
import { InputNumber, Typography } from "antd";
import Button from "components/elements/buttons";
import { useSetting } from "utils/context/settings";
import { SettingProps } from "utils/types/settingTypes";
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "utils/helpers/localStorage";

import styles from "./advancedSetting.module.scss";

const { Text, Title } = Typography;

export function AdvancedSetting() {
  const { userSetting, setUserSetting } = useSetting();

  useEffect(() => {
    const settings = getItemFromLocalStorage("settings", true);
    setUserSetting(settings);
  }, []);

  const onChangeAutoLock = (value: number | null) => {
    if (value == null) value = 3;
    const settings: SettingProps = {
      lockerTimer: value,
    };
    setUserSetting({ ...userSetting, ...settings });
  };

  const saveSetting = () => {
    setItemInLocalStorage("settings", userSetting, true);
  };

  return (
    <div>
      <div className={styles.options}>
        <Title level={5}> Auto-locker timer(minutes)</Title>
        <Text type="secondary">
          Set the idle time in minutes before AnoBlock will become locked.
        </Text>
        <InputNumber
          min={3}
          max={60}
          onChange={onChangeAutoLock}
          value={userSetting.lockerTimer}
        />
      </div>
      <div className={styles.options}>
        <Title level={5}>Backup Your data</Title>
        <Text type="secondary">
          You can backup user settings containing preferences and account
          addresses into a JSON file
        </Text>
        <Button className={styles.button} text="Backup" />
      </div>
      <div className={styles.options}>
        {" "}
        <Title level={5}>Restore user data</Title>
        <Text type="secondary">
          You can restore user settings containing preferences and account
          addresses from a previously backed up JSON file
        </Text>
        <Button className={styles.button} text="Restore" />
      </div>
      <div className={styles.options}>
        <Button
          className={styles.button}
          text="Confirm Change"
          type="primary"
          onClick={saveSetting}
        />
      </div>
    </div>
  );
}
