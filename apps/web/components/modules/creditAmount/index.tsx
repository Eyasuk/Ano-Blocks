import { Divider, Typography } from "antd";
import { GlassCard } from "components/elements/cards";

import styles from "./creditAmont.module.scss";

const { Title, Text } = Typography;

export default function CreditAmount(): JSX.Element {
  return (
    <GlassCard>
      <div className={styles.balance}>
        <Title level={5} type="secondary">
          Credit Balance
        </Title>
        <Divider />
        <Text className={styles.amount}>
          1000 ETB{" "}
          {/* {userSetting.currencyConversion == "ETB"
            ? birr(userBalance.TotalInBirr)
            : usd(userBalance.TotalInUsd)} */}
        </Text>
        <Text type="secondary">
          12 USD
          {/* {userSetting.currencyConversion != "ETB"
            ? `   ETB ${userBalance.TotalInBirr.toPrecision(4)}`
            : `   USD ${userBalance.TotalInUsd}`} */}
        </Text>
      </div>
    </GlassCard>
  );
}
