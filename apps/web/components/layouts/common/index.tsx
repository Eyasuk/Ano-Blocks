'use client';
import { MenuBar } from 'components/modules/menu';
import ThemeToggle from 'components/elements/themeToggle';
import { Layout } from 'antd';

const { Content, Footer, Sider } = Layout;
import styles from './layout.module.scss';
import { Theme } from 'utils/context/antdTheme';

type Props = {
  children: React.ReactNode;
};

export default function CommonLayout({ children }: Props): JSX.Element {
  return (
    <Theme>
      <ThemeToggle />
      {children}
    </Theme>
  );
}
