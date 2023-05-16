import { MenuBar } from "components/modules/menu";
import { Layout } from "antd";
import CommonLayout from "components/layouts/common";
import ChooseNewtork from "components/modules/choosenetwork";
import { SettingProvider } from "utils/context/settings";
import { NetworkProvider } from "utils/context/network";
import { UserBalanceProvider } from "utils/context/userBalance";

import styles from "./layout.module.scss";

const { Content, Footer } = Layout;

type Props = {
  children: React.ReactNode;
};

export default function Default({ children }: Props): JSX.Element {
  return (
    <SettingProvider>
      <NetworkProvider>
        <UserBalanceProvider>
          <CommonLayout>
            <Layout style={{ minHeight: "100vh" }} className={styles.body}>
              <MenuBar />
              <ChooseNewtork />
              <Layout>
                <Content className={styles.contents}>
                  <div className={styles.content}>{children}</div>
                </Content>

                {/* <Footer style={{ textAlign: 'center' }}>
          Ano ©2023 Created by AnoBlocks
        </Footer> */}
              </Layout>
            </Layout>
          </CommonLayout>
        </UserBalanceProvider>
      </NetworkProvider>
    </SettingProvider>
  );
}
