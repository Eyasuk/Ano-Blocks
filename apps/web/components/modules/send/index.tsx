import { FilledButton, OutlinedButton } from 'components/elements/buttons';
import { GlassCard } from 'components/elements/cards';
import Input from 'components/elements/input';
import { useUser } from 'utils/hooks/user';

import styles from './send.module.scss';

export default function Send(): JSX.Element {
  const { userInfo } = useUser();

  return (
    <div className={styles.container}>
      <GlassCard>
        <div className={styles.layout}>
          <h2 className={styles.title}>Send</h2>
          <Input error={false} inputType='text' label='Reciver Address' />
          <Input error={false} inputType='text' label='Amount' />
          <Input error={false} inputType='text' label='Comment' />
          <OutlinedButton text='Send' />
          {/* <h3>{'from : ' + userInfo?.pubad}</h3> */}
        </div>
      </GlassCard>
    </div>
  );
}
