import { useState } from "react";
import { Divider, Form, Input, Select, Typography } from "antd";
import { GlassCard } from "components/elements/cards";

import styles from "./currencyStatistics.module.scss";

const { Text, Title } = Typography;

export default function currencyStatistics({ asset }: any) {
  return (
    <div className={styles.container}>
      <GlassCard>
        {asset && (
          <div className={"layouts"}>
            <Title level={5}>{`${asset.name} Price Statistics`}</Title>
            <div className={styles.info}>
              <Text type="secondary">{`${asset.name} price`}</Text>{" "}
              <Text strong>{`$0.81`}</Text>
            </div>
            <Divider />
            <div className={styles.info}>
              <Text type="secondary">{`24h Low / 24h High`}</Text>{" "}
              <Text strong>{`$0.81 / $0.90`}</Text>
            </div>
            <Divider />
            <div className={styles.info}>
              <Text type="secondary">{`7d Low / 7d High`}</Text>{" "}
              <Text strong>{`$0.81 / $0.90`}</Text>
            </div>
            <Divider />
            <div className={styles.info}>
              <Text type="secondary">{`Trading Volume`}</Text>{" "}
              <Text strong>{`$18,900,233`}</Text>
            </div>
            <Divider />
            <div className={styles.info}>
              <Text type="secondary">{`Market Cap`}</Text>{" "}
              <Text strong>{`$345,321,123`}</Text>
            </div>
            <Divider />
            <div className={styles.info}>
              <Text type="secondary">{`Volume / Market Cap`}</Text>{" "}
              <Text strong>{`0.34`}</Text>
            </div>
            <Divider />
            <div className={styles.info}>
              <Text type="secondary">{`All-Time High`}</Text>{" "}
              <div className={styles.priceChange}>
                <div className={styles.price}>
                  <Text strong>{`$1 `}</Text>
                  <Text type="danger">{`-12%`}</Text>
                </div>
                <Text>{`Nov 10,2021 (1  year)`}</Text>
              </div>
            </div>
            <Divider />
            <div className={styles.info}>
              <Text type="secondary">{`All-Time Low`}</Text>{" "}
              <div className={styles.priceChange}>
                <div className={styles.price}>
                  <Text strong>{`$0.3 `}</Text>
                  <Text type="success">{`12%`}</Text>
                </div>

                <Text>{`Nov 10,2020 (2  year)`}</Text>
              </div>
            </div>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
