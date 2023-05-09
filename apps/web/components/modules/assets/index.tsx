import NextImage from "next/image";
import { Button, Table, Typography } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { MoreOutlined } from "@ant-design/icons";
import { GlassCard } from "components/elements/cards";
import { Assets as assets, AssetProps } from "utils/constants/assets";
import { useNetwork } from "utils/context/network";

import styles from "./assets.module.scss";
import { useEffect, useState } from "react";
import { useUser } from "utils/context/user";
import { AddressLike, formatEther, toBigInt, toNumber } from "ethers";

const { Title, Text } = Typography;

interface DataType {
  key: React.Key;
  name: string;
  price: number;
  priceChange: number;
  value: number;
  amount: number;
  abbrv?: string;
  imageUrl?: string;
  more?: JSX.Element;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    width: "20%",
    render: (value, record) => {
      return (
        <div className={styles.assets}>
          {record.imageUrl ? (
            <NextImage
              src={record.imageUrl}
              alt="etbc coin icon"
              width={35}
              height={35}
            />
          ) : null}
          <div className={styles.name}>
            <Text>{record.name} </Text>
            <Text type="secondary">{record.abbrv}</Text>
          </div>
        </div>
      );
    },
  },
  {
    title: "Price/24 change",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
    render: (value, record) => {
      return (
        <span className={styles.priceAndchange}>
          <div className={styles.price}>
            <Text type="secondary">ETB </Text>
            <Text strong>{record.price}</Text>
          </div>
          {record.priceChange < 0 ? (
            <Text type="danger">{"  " + record.priceChange + "%"}</Text>
          ) : (
            <Text type="success">{"  " + record.priceChange + "%"}</Text>
          )}
        </span>
      );
    },
  },
  {
    title: "Value",
    dataIndex: "value",
    sorter: (a, b) => a.value - b.value,
    render: (value, record) => {
      return (
        <span>
          <Text type="secondary">{"ETB "}</Text>
          <Text strong>{record.value}</Text>
        </span>
      );
    },
  },
  {
    title: "Amount",
    dataIndex: "amount",
    sorter: (a, b) => a.amount - b.amount,
    render: (value, record) => {
      return (
        <span>
          <Text strong>{record.value}</Text>
          <Text type="secondary">{" " + record.abbrv}</Text>
        </span>
      );
    },
  },
  {
    title: "",
    dataIndex: "more",
    render: () => <Button icon={<MoreOutlined />} />,
  },
];

export default function Assets(): JSX.Element {
  const { provider } = useNetwork();
  const { userInfo } = useUser();
  const [amount, setAmount] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      const w = await provider?.getBalance(userInfo?.pubad as AddressLike);
      console.log(w);
      let p;
      if (w) {
        p = formatEther(w);
      }
      console.log(p);
      console.log(typeof p);

      if (p) setAmount(p);
      else setAmount("0");
    };
    fetchData();
  });

  const mapDataForAssetsTable = (items: AssetProps, index: number) => {
    return {
      key: index.toString(),
      name: items.name,
      abbrv: items.abbrev,
      imageUrl: items.imageUrl,
      price: 1890,
      priceChange: 12,
      value: Number(amount),
      amount: 2000,
    };
  };

  const data: DataType[] = assets.map(mapDataForAssetsTable);
  return (
    <GlassCard>
      <div className={styles.layout}>
        <Title className={styles.title} level={5} type="secondary">
          Assets{" "}
        </Title>
        <Table columns={columns} dataSource={data} />
      </div>
    </GlassCard>
  );
}
