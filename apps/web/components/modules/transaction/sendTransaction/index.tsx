"use client";
import { Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import {
  getSendHistory,
  SendHistoryProps,
} from "utils/helpers/transactionHistory";

import styles from "./deposit.module.scss";

const { Text } = Typography;

interface DataType {
  key: React.Key;
  index: number;
  recieverAddress: string;
  amount: number;
  asset: string;
  hash: string;
}

export function SendTransaction() {
  const [sendData, setSendData] = useState<[]>();

  useEffect(() => {
    const send = getSendHistory();
    const sendMap = send.map((data: SendHistoryProps, index: number) => {
      return {
        index: index,
        amount: data.amount,
        recieverAddress: data.recieverAddress,
        hash: data.transactionHash,
        asset: data.asset,
      };
    });
    setSendData(sendMap);
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: "index",
      dataIndex: "index",
    },
    {
      title: "amount",
      dataIndex: "amount",
      render: (_value, record) => {
        return (
          <span>
            <Text strong>{`${record.amount} ${record.asset}`}</Text>
            <Text type="secondary">{" " + record.asset}</Text>
          </span>
        );
      },
    },
    {
      title: "hash",
      dataIndex: "hash",
    },
  ];

  return (
    <div className={styles.options}>
      <Table columns={columns} dataSource={sendData} />
    </div>
  );
}
