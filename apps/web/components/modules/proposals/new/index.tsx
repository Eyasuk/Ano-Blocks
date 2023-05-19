"use client";

import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Spin,
  Typography,
} from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import {
  CheckCircleTwoTone,
  LoadingOutlined,
  WarningTwoTone,
} from "@ant-design/icons";
import moment from "moment";
import { GlassCard } from "components/elements/cards";
import Button from "components/elements/buttons";

import styles from "./new.module.scss";

const { Title } = Typography;
const { RangePicker } = DatePicker;

export default function NewProposal(): JSX.Element {
  const [form] = Form.useForm();

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < moment().startOf("days");
  };

  return (
    <div className={styles.container}>
      <GlassCard>
        <div className={styles.layout}>
          <Title level={4}>Create a New Proposal</Title>

          <Form
            name="proposal"
            form={form}
            size="large"
            layout="vertical"
            autoComplete="off"
            onFinish={() => {}}
          >
            <Form.Item
              label="Proposal name"
              name="proposalname"
              rules={[
                {
                  required: true,
                  message: `Please Input name!`,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: `Please Input descriptions!`,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="duration"
              name="duration"
              rules={[
                {
                  required: true,
                  message: `Please input correct date!`,
                },
              ]}
            >
              <RangePicker
                disabledDate={disabledDate}
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD HH:mm"
                allowEmpty={[false, false]}
                className={"createDateRangePicker"}
                dropdownClassName={"createDateRangePicker"}
              />
            </Form.Item>

            <Form.Item>
              <Button text="Create" type="primary" htmlType="submit" />
            </Form.Item>
          </Form>
        </div>
      </GlassCard>
    </div>
  );
}
