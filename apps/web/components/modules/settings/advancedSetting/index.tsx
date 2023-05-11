import { useState } from "react";
import { InputNumber, Select, Typography } from "antd";
import Button from "components/elements/buttons";
import { Curriences } from "utils/constants/currencies";

import styles from "./advancedSetting.module.scss";

const { Text, Title } = Typography;

export function AdvancedSetting() {
  const [hideAssets, setHideAssets] = useState<boolean>(false);

  const hideAssetChange = () => {
    setHideAssets((prev) => !prev);
  };

  return (
    <div>
      <div className={styles.options}>
        <Title level={5}> Auto-locker timer(minutes)</Title>
        <Text type="secondary">
          Set the idle time in minutes before AnoBlock will become locked.
        </Text>
        <InputNumber min={3} max={60} />
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
        />
      </div>
    </div>
  );
}
