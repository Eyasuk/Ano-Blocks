import Header from 'components/modules/header';
import { MenuBar } from 'components/modules/menu';
import ThemeToggle from 'components/elements/themeToggle';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Content, Footer, Sider } = Layout;
import styles from './layout.module.scss';
import { Theme } from 'utils/context/antdTheme';

type Props = {
  children: React.ReactNode;
};

export default function Default({ children }: Props): JSX.Element {
  return (
    // <div className={styles.default}>
    <Theme>
      <Layout style={{ minHeight: '100vh' }} className={styles.body}>
        <ThemeToggle />
        <MenuBar />
        <Layout className='site-layout'>
          <Content className={styles.contents}>
            <div className={styles.content}>{children}</div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>
          Ano ©2023 Created by AnoBlocks
        </Footer> */}
        </Layout>
      </Layout>
    </Theme>
  );
}
