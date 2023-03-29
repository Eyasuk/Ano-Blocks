import NextImage from 'next/image';
import { Divider, Typography } from 'antd';
import { GlassCard } from 'components/elements/cards';

import styles from './etbcwallet.module.scss';
import Button from 'components/elements/buttons';

const { Title, Text } = Typography;

export function EtbcWallet(): JSX.Element {
  return (
    <GlassCard>
      <div className={styles.layout}>
        <Title level={5} type='secondary'>
          ETBC Wallet Balance
        </Title>
        <div className={styles.balance}>
          <NextImage
            className={styles.image}
            src='./icons/etbcoin.svg'
            alt='etbc coin icon'
            width={38}
            height={38}
          />

          <Text type='secondary'>ETBC </Text>
          <Text className={styles.amount}>0.00 </Text>
        </div>
        <Divider />
        <div className={styles.aprs}>
          <Text>Stake APR {''}</Text>
          <Text>5.00%</Text>
          <Button text='Stake' type='link' />
        </div>
        <div className={styles.aprs}>
          <Text>Borrow APR {''}</Text>
          <Text>5.00%</Text>
          <Button text='Borrow' type='link' />
        </div>
      </div>
    </GlassCard>
  );
}
