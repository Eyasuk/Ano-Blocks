import { WalletOutlined } from '@ant-design/icons';
import { App, Button, Card, MenuProps } from 'antd';
import Modal from 'components/elements/modal';
import { useState } from 'react';

import styles from './chooseNetwork.module.scss';

export default function ChooseNetwork(): JSX.Element {
  const [open, setOpen] = useState(false);
  const { message, notification, modal } = App.useApp();

  const items: MenuProps = {
    title: 'Network',
    items: [
      {
        label: 'NEWTORK1',
        key: '0',

        className: styles.d,
      },
      {
        key: '1',
        label: 'Network',
      },
      {
        type: 'divider',
      },
      {
        key: '12',
        onClick: () => {
          console.log('sth');
        },
        label: <button>c</button>,
        icon: <WalletOutlined />,
      },
      {
        key: '2',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.aliyun.com'
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.luohanacademy.com'
          >
            3rd menu item
          </a>
        ),
      },
    ],
  };

  return (
    <>
      <div className={styles.container}>
        <Button
          onClick={() => {
            setOpen((prev) => !prev);
            //modal.confirm({});
          }}
        >
          Etherum
        </Button>
      </div>
      <Modal
        className={styles.modal}
        open={open}
        closable={false}
        onCancel={() => setOpen(false)}
      >
        {' '}
        <div></div>
      </Modal>
    </>
  );
}
