import { Button, Divider, Progress, Typography } from "antd";
import { VoteProp } from "./type";
import { GlassCard } from "components/elements/cards";

import styles from "./vote.module.scss";

const { Title, Text } = Typography;

export default function Vote({ proposalIndex }: VoteProp): JSX.Element {
  return (
    <div className={styles.container}>
      <GlassCard>
        <Title level={4}>{"Proposal " + proposalIndex}</Title>
        <div className={styles.status}>
          <Text strong>Exectuted</Text>
          <Text strong>20/12/1012</Text>
        </div>
        <div className={styles.votes}>
          <Button className={`${styles.voteCount} ${styles.voteFor}`}>
            <Text>{"For\t" + " "} </Text>
            <Text>345901</Text>
          </Button>

          <Button className={`${styles.voteCount} ${styles.voteAganist}`}>
            <Text>{"Against " + " "}</Text>
            <Text>345542</Text>
          </Button>
        </div>
        <Progress percent={100} success={{ percent: 50 }} type="line" />

        <Divider />
        <div>
          <Text>
            {" "}
            Withdrawal of 1000 for charty from researve to build a school and a
            systems,
          </Text>
        </div>
      </GlassCard>
    </div>
  );
}
