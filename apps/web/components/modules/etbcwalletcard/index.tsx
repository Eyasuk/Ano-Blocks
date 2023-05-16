import NextImage from "next/image";
import { Divider, Typography } from "antd";
import Button from "components/elements/buttons";
import { GlassCard } from "components/elements/cards";
import { useUserBalance } from "utils/context/userBalance";
import { useSetting } from "utils/context/settings";

import styles from "./etbcwallet.module.scss";

const { Title, Text } = Typography;

export default function EtbcWallet(): JSX.Element {
  const { userBalance } = useUserBalance();
  const { userSetting } = useSetting();

  return (
    <GlassCard>
      <div className={styles.layout}>
        <Title level={5} type="secondary">
          ETBC Wallet Balance
        </Title>
        <div className={styles.balance}>
          <NextImage
            className={styles.image}
            src="./icons/assets/etbcoin.svg"
            alt="etbc coin icon"
            width={38}
            height={38}
          />

          <Text type="secondary">ETBC </Text>
          <Text className={styles.amount}>{userBalance.EtbCoin.total}</Text>
        </div>
        <Divider />
        <div className={styles.aprs}>
          <Text>Stake APR {""}</Text>
          <Text>5.00%</Text>
          <Button text="Stake" type="link" />
        </div>
        <div className={styles.aprs}>
          <Text>Borrow APR {""}</Text>
          <Text>5.00%</Text>
          <Button text="Borrow" type="link" />
        </div>
      </div>
    </GlassCard>
  );
}
