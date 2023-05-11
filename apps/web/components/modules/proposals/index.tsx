"use client";
import { useState } from "react";
import { Button, Table, Typography } from "antd";
import { GlassCard } from "components/elements/cards";
import Vote from "components/modules/vote";

import { ProposalProp } from "./type";

import styles from "./proposals.module.scss";
import Modal from "components/elements/modal";

const { Title, Text } = Typography;

export default function Dao(): JSX.Element {
  const [propsalModal, setPropsalModal] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<number>();
  const onProposalSelected = (record: ProposalProp) => {
    setSelectedRow(record.index);
    setPropsalModal((prev) => !prev);
  };

  const columns = [
    {
      dataIndex: "index",
      key: "index",
    },
    {
      dataIndex: "propsal",
      key: "propsal",
    },
    {
      dataIndex: "status",
      key: "status",
    },
    {
      dataIndex: "date",
      key: "date",
    },
    {
      dataIndex: "vote",
      key: "vote",
    },
  ];

  const data: ProposalProp[] = [
    {
      key: 0,
      index: 0,
      propsal:
        "withdrawal of 1000 for charty from researve to build a school and a systems",
      status: "Executed",
      date: "2012/09/09",
      vote: "Not Voted",
    },
    {
      key: 1,
      index: 1,
      propsal:
        "withdrawal of 1000 for charty from researve to build a school and a systems",
      status: "Executed",
      date: "2012/09/09",
      vote: "Not Voted",
    },
    {
      key: 2,
      index: 2,
      propsal:
        "withdrawal of 1000 for charty from researve to build a school and a systems",
      status: "Executed",
      date: "2012/09/09",
      vote: "Not Voted",
    },
    {
      key: 3,
      index: 3,
      propsal:
        "withdrawal of 1000 for charty from researve to build a school and a systems",
      status: "Executed",
      date: "2012/09/09",
      vote: "Not Voted",
    },
    {
      key: 4,
      index: 4,
      propsal:
        "withdrawal of 1000 for charty from researve to build a school and a systems",
      status: "Executed",
      date: "2012/09/09",
      vote: "Not Voted",
    },
  ];
  return (
    <div className={styles.container}>
      <Title level={3}>AnoBlocks Governance </Title>
      <div>
        <Text type="secondary">create and vote for proposals</Text>
      </div>
      <Button
        className={styles.createProposalButton}
        type="primary"
        size="large"
      >
        Create Proposal
      </Button>
      <GlassCard>
        <div className={styles.layouts}>
          <Title className={styles.title} level={4}>
            Proposals{" "}
          </Title>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 5,
            }}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  onProposalSelected(record);
                }, // click row
              };
            }}
          />
        </div>
      </GlassCard>
      <Modal open={propsalModal} onCancel={() => setPropsalModal(false)}>
        {selectedRow != undefined && <Vote proposalIndex={selectedRow} />}
      </Modal>
    </div>
  );
}
