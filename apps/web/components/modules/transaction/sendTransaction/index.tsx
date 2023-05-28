"use client";
import NextImage from "next/image";
import { Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import {
  getSendHistory,
  SendHistoryProps,
} from "utils/helpers/transactionHistory";
import { AssetProps, Assets } from "utils/constants/assets";

import styles from "./deposit.module.scss";

const { Text } = Typography;

interface DataType {
  key: React.Key;
  coin: string;
  recieverAddress: string;
  amount: number;
  asset: AssetProps;
  hash: string;
}

export function SendTransaction() {
  const [sendData, setSendData] = useState<[]>();

  useEffect(() => {
    const send = getSendHistory();
    let asset: any = {};
    for (let i = 0; i < Assets.length; i++) {
      asset[Assets[i].name] = Assets[i];
    }

    const sendMap = send.map((data: SendHistoryProps, index: number) => {
      return {
        amount: data.amount,
        recieverAddress: data.recieverAddress,
        hash: data.transactionHash,
        asset: asset[data.asset],
      };
    });
    setSendData(sendMap);
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: "coin",
      dataIndex: "coin",
      render: (_value, record) => {
        return (
          <NextImage
            src={record.asset.imageUrl ?? ""}
            alt="etbc coin icon"
            width={35}
            height={35}
          />
        );
      },
    },
    {
      title: "amount",
      dataIndex: "amount",
      width: "30%",
      render: (_value, record) => {
        return (
          <span>
            <Text strong>{`${record.amount} ${record.asset.abbrev}`}</Text>
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
