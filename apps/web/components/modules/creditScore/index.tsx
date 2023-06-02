import { Divider, Typography } from "antd";
import { GlassCard } from "components/elements/cards";

import styles from "./creditScore.module.scss";

const { Title, Text } = Typography;

export default function CreditScore(): JSX.Element {
  return (
    <GlassCard>
      <div className={styles.balance}>
        <Title level={5} type="secondary">
          Credit Score
        </Title>
        <Divider />
        <Text className={styles.amount}>1000 </Text>
      </div>
    </GlassCard>
  );
}
