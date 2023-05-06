import { Typography } from "antd";
import { GlassCard } from "components/elements/cards";

import styles from "./proposals.module.scss";

const { Title, Text } = Typography;

export default function Dao(): JSX.Element {
  return (
    <GlassCard>
      <div className={styles.layouts}>
        <Title className={styles.title} level={4}>
          Proposals{" "}
        </Title>
      </div>
    </GlassCard>
  );
}
