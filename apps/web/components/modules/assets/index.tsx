import { useEffect, useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { Button, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { MoreOutlined } from "@ant-design/icons";
import { GlassCard } from "components/elements/cards";
import { Assets as assets, AssetProps } from "utils/constants/assets";
import { useNetwork } from "utils/context/network";
import { prices, userAssets } from "utils/helpers/assets";
import { useUser } from "utils/context/user";

import styles from "./assets.module.scss";

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
    render: (_value, record) => {
      return (
        <span>
          <Text strong>{record.amount}</Text>
          <Text type="secondary">{" " + record.abbrv}</Text>
        </span>
      );
    },
  },
  {
    title: "",
    dataIndex: "more",
    render: (_value, record) => (
      <Link href={"asset/" + record.name.toLowerCase()}>
        <Button icon={<MoreOutlined />} />{" "}
      </Link>
    ),
  },
];

export default function Assets(): JSX.Element {
  const { provider, choosenNetwork } = useNetwork();
  const { userInfo } = useUser();
  const [data, setData] = useState<DataType[]>();

  useEffect(() => {
    const work = async () => {
      try {
        if (provider && userInfo?.pubad) {
          const assetsBalance = await userAssets(
            userInfo?.pubad,
            provider,
            choosenNetwork
          );

          const price = await prices();
          const mapDataForAssetsTable = (items: AssetProps, index: number) => {
            return {
              key: index.toString(),
              name: items.name,
              abbrv: items.abbrev,
              imageUrl: items.imageUrl,
              price: (price as any)[items.name]["price"],
              priceChange: (price as any)[items.name]["change"].toPrecision(3),
              amount: (assetsBalance as any)[items.name],
              value:
                (price as any)[items.name]["price"] *
                (assetsBalance as any)[items.name],
            };
          };

          const temp: DataType[] = assets.map(mapDataForAssetsTable);
          setData(temp);
        }
      } catch (err) {
        console.log(err);
      }
    };
    work();
  }, [provider, userInfo]);

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
