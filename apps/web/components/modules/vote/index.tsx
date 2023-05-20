import { Button, Divider, Progress, Typography } from "antd";
import { GlassCard } from "components/elements/cards";
import { VoteProp } from "./type";

import styles from "./vote.module.scss";

const { Title, Text } = Typography;

export default function Vote({ proposal }: VoteProp): JSX.Element {
  return (
    <div className={styles.container}>
      <GlassCard>
        <Title level={4}>{"Proposal " + proposal.name}</Title>
        <div className={styles.status}>
          <Text strong>{proposal.status}</Text>
          <Text strong>{proposal.endDate}</Text>
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
        <Progress
          percent={100}
          success={{ percent: 50 }}
          type="line"
          showInfo={false}
        />

        <Divider />
        <div>
          <Text>{proposal.description}</Text>
        </div>
      </GlassCard>
    </div>
  );
}
