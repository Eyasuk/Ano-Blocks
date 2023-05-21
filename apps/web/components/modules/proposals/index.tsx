"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Table, Typography } from "antd";
import { GlassCard } from "components/elements/cards";
import Vote from "components/modules/vote";
import Modal from "components/elements/modal";
import { getProposal } from "utils/helpers/dao";
import { useNetwork } from "utils/context/network";
import { useUser } from "utils/context/user";
import { ProposalProp } from "./type";

import styles from "./proposals.module.scss";

const { Title, Text } = Typography;

export default function Dao(): JSX.Element {
  const router = useRouter();
  const { userInfo } = useUser();
  const { choosenNetwork, provider } = useNetwork();

  const [propsalModal, setPropsalModal] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<number>();
  const [proposalData, setProposalData] = useState<ProposalProp[]>();

  useEffect(() => {
    const work = async () => {
      if (provider && userInfo?.priv) {
        const response = await getProposal(
          provider,
          choosenNetwork.name as "Polygon" | "Mumbai" | "Local",
          userInfo?.priv
        );
        if (response.success) {
          setProposalData(response.data);
        }

        let data: ProposalProp[] = [];

        for (var i = 0; i < response.data.length; i++) {
          const temp: ProposalProp = {
            key: i,
            index: i,
            name: response.data[i][0],
            description: response.data[i][1],
            startDate: new Date(
              Number(response.data[i][2]) * 1000
            ).toDateString(),
            endDate: new Date(
              Number(response.data[i][3]) * 1000
            ).toDateString(),

            status:
              Date.now() > Number(response.data[i][3]) * 1000
                ? "Executed"
                : Date.now() >= Number(response.data[i][2]) * 1000
                ? "Ongoing"
                : "Not Started",

            vote: response.IsVoted[i] ? "Voted" : "Not Voted",
            voteFor: Number(response.data[i][5]),
            voteAgainst: Number(response.data[i][4]),
          };
          data[i] = temp;
        }
        setProposalData(data);
      }
    };
    work();
  }, [provider]);

  const onProposalSelected = (record: ProposalProp) => {
    setSelectedRow(record.index);
    setPropsalModal((prev) => !prev);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Starting Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Ending Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "vote",
      key: "vote",
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
        onClick={() => {
          router.push("/dao/create");
        }}
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
            dataSource={proposalData}
            pagination={{
              pageSize: 5,
            }}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  onProposalSelected(record);
                },
                // click row
              };
            }}
          />
        </div>
      </GlassCard>
      <Modal open={propsalModal} onCancel={() => setPropsalModal(false)}>
        {selectedRow != undefined && proposalData && (
          <Vote proposal={proposalData[selectedRow]} />
        )}
      </Modal>
    </div>
  );
}
