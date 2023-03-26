'use client';

import React from 'react';

import { Dropdown, MenuProps } from 'antd';
import { DarkBulbIcon, LightBulbIcon } from 'components/elements/icons';
import { useTheme } from 'utils/context/antdTheme';
import styles from './themeToggle.module.scss';

export default function ThemeToggle() {
  const { darkTheme, setDarkTheme } = useTheme();
  const onClick: MenuProps['onClick'] = ({ key }) => {
    console.log(key);
    console.log(darkTheme);
    setDarkTheme(key == 'dark');
  };

  const items: MenuProps['items'] = [
    {
      key: 'light',
      label: (
        <div>
          <LightBulbIcon />
          <span>light</span>
        </div>
      ),
    },
    {
      key: 'dark',
      label: (
        <div>
          <DarkBulbIcon />
          <span>dark</span>
        </div>
      ),
    },
  ];

  return (
    <Dropdown
      className={styles.container}
      menu={{
        items,
        selectable: true,
        selectedKeys: [darkTheme ? 'dark' : 'light'],
        onClick,
      }}
    >
      <button className='btn'>
        {darkTheme ? <DarkBulbIcon /> : <LightBulbIcon />}
      </button>
    </Dropdown>
  );
}
