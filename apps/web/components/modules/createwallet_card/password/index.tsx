'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from 'components/elements/input';
import { OutlinedButton } from 'components/elements/buttons';
import { notification } from 'components/elements/notification';
import { createWallet } from 'utils/helpers/createWallet';
import { setUserSession, signUp } from 'utils/helpers/userSession';
import { useUser } from 'utils/context/user';
import { PasswordTypes } from './types';
import { Typography } from 'antd';

const { Title, Text } = Typography;
import styles from './password.module.scss';

export default function CreatePassword({
  setPassword,
  passphrase,
  stateChanger,
  extraPassphrase,
}: PasswordTypes): JSX.Element {
  const router = useRouter();
  const [passInputError, setPassError] = useState<boolean>(false);
  const { setUserLoggedin, userLoggedin, setUserInfo } = useUser();

  const handleSumbit = async (event: any) => {
    event.preventDefault();
    if (!event.target) {
      setPassError(false);
      return;
    }
    if (event.target.password.value != event.target.repassword.value) {
      setPassError(true);
      notification({
        message: "password doesn't match",
        messageType: 'error',
        description: 'make sure your password are the same',
      });
      return;
    }
    setPassword(event.target.password.value);
    const account = await createWallet(passphrase, extraPassphrase);
    const userLogin = signUp(account, event.target.password.value);
    await setUserSession(event.target.password.value);

    setUserInfo(account);
    setUserLoggedin(true);
    router.push('/');
  };

  return (
    <div className={styles.layouts}>
      <Title level={3} className={styles.title}>
        New Password
      </Title>
      <Text type='warning' className={styles.description}>
        {' '}
        Password will insure you wallet safe but It is temporary, If you forget
        your password you can recover using your passphrase!!
      </Text>
      <form onSubmit={handleSumbit}>
        <div className={styles.form}>
          <Input
            label='Password'
            inputType='password'
            autoComplete='off'
            error={passInputError}
            id='password'
            name='password'
            required
            minLength={5}
          />
          <Input
            label='Retype Password'
            inputType='password'
            autoComplete='off'
            error={passInputError}
            id='repassword'
            name='repassword'
            required
            minLength={5}
          />
          <div className={styles.button}>
            <OutlinedButton text='Finsh' />
          </div>
        </div>
      </form>
    </div>
  );
}
