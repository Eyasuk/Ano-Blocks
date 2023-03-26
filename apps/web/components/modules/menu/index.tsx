import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  DashboardOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
import { Typography } from 'antd';

const { Title } = Typography;
import styles from './menu.module.scss';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <DashboardOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

export function MenuBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState(collapsed);

  useEffect(() => {
    if (collapsed) setTitle((prev) => !prev);
    else {
      setTimeout(() => {
        setTitle((prev) => !prev);
      }, 150);
    }
  }, [collapsed]);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value: boolean) => setCollapsed((prev) => !prev)}
      theme='light'
    >
      <div className={styles.logo}>
        <Image
          className={styles.image}
          alt='logo of ano block'
          src='/icons/logo.svg'
          height={0}
          width={0}
        />
        {!title ? (
          <Title level={3} className={styles.title}>
            AnoBlocks{' '}
          </Title>
        ) : null}
      </div>

      <Menu defaultSelectedKeys={['1']} items={items} theme='light' />
    </Sider>
  );
}
