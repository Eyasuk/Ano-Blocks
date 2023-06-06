import { Form, InputNumber, Radio, Select, Switch, Typography } from "antd";
import Button from "components/elements/buttons";

import styles from "./getLoan.module.scss";

const { Text, Title } = Typography;

export function GetLoan() {
  const [form] = Form.useForm();

  const returnDateOptions = ["30 days", "60 days", "90 days"];

  const onSumbit = () => {};

  return (
    <Form
      name="getLoan"
      form={form}
      layout="vertical"
      autoComplete="off"
      onFinish={onSumbit}
    >
      <div className={styles.options}>
        <Title level={5}>Amount</Title>

        <Form.Item
          name="amount"
          rules={[
            {
              required: true,
              message: `Please Input Amount!`,
            },
          ]}
        >
          <InputNumber min={100} width="222" />
        </Form.Item>
      </div>

      <div className={styles.options}>
        <Title level={5}>Return Date</Title>
        <Text type="secondary">
          Select Your return data, Interset rate are different for different
          return dates.
        </Text>
        <Form.Item name="primary currency">
          <Radio.Group options={returnDateOptions} optionType="button" />
        </Form.Item>
      </div>

      <div className={styles.options}>
        <Form.Item>
          <Button
            className={styles.button}
            text="Request Loan"
            type="primary"
            htmlType="submit"
          />
        </Form.Item>
      </div>
    </Form>
  );
}
