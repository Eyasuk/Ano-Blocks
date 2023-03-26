'use client';
import { useState } from 'react';
import { CopyIcon, QrIcon } from 'components/elements/icons';
import Button from 'components/elements/buttons';
import { GlassCard } from 'components/elements/cards';
import QrAddress from 'components/modules/qrAddress';
import { notification } from 'components/elements/notification';
import { useUser } from 'utils/context/user';
import { shortenText } from 'utils/helpers/shortText';
import { copyToClipBoard } from 'utils/helpers/copytext';
import { Typography } from 'antd';

const { Title, Text } = Typography;
import styles from './walletcard.module.scss';

export default function Wallet(): JSX.Element {
  const { userInfo } = useUser();
  const [qrOpen, setQrOpen] = useState<boolean>(false);
  const handleCancel = () => {
    setQrOpen(false);
  };

  const handelCopy = () => {
    const response = copyToClipBoard(userInfo?.pubad ?? '');
    notification({
      messageType: 'success',
      message: 'Copied!',
      description: 'You Copied the address',
    });
  };
  return (
    <div className={styles.container}>
      <GlassCard>
        <div className={styles.layout}>
          <div className={styles.column}>
            <Text className={styles.title}>Total portfolio value</Text>
            <div>
              <Title level={4}>ETB 0.00</Title>
            </div>
          </div>

          <div className={styles.line}></div>
          <div className={(styles.column, styles.walletaddress)}>
            <Text className={styles.title}>Main account</Text>
            <div className={styles.walletinfo}>
              <Title level={4}>{shortenText(userInfo?.pubad)}</Title>
              <div className={styles.icons}>
                <CopyIcon className={styles.icon} onClick={handelCopy} />
                <QrIcon
                  className={styles.icon}
                  onClick={() => setQrOpen(!qrOpen)}
                />
              </div>
            </div>
          </div>

          <div className={styles.leftButton}>
            <Button text='Receive' onClick={() => true} />
            <Button text='Send' onClick={() => true} />
          </div>
        </div>
      </GlassCard>
      <QrAddress
        address={userInfo?.pubad ?? ''}
        open={qrOpen}
        onCancel={handleCancel}
      />
    </div>
  );
}
