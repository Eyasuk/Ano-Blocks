'use client';
import { useState } from 'react';
import { CopyIcon, QrIcon } from 'components/elements/icons';
import { FilledButton, OutlinedButton } from 'components/elements/buttons';
import { GlassCard } from 'components/elements/cards';
import QrAddress from 'components/modules/qrAddress';
import { notification } from 'components/elements/notification';
import { useUser } from 'utils/context/user';
import { shortenText } from 'utils/helpers/shortText';
import { copyToClipBoard } from 'utils/helpers/copytext';

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
            <p className={styles.title}>Total portfolio value</p>
            <h2>ETB 0.00</h2>
          </div>

          <div className={styles.line}></div>
          <div className={(styles.column, styles.walletaddress)}>
            <p className={styles.title}>Main account</p>
            <div className={styles.walletinfo}>
              <h2>{shortenText(userInfo?.pubad)}</h2>
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
            <FilledButton text='Receive' onClick={() => true} />
            <OutlinedButton text='Send' onClick={() => true} />
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
