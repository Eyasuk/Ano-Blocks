'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Input from 'components/elements/input';
import Button from 'components/elements/buttons';
import { GlassCard } from 'components/elements/cards';
import { notification } from 'components/elements/notification';
import {
  checkUserWithPassword,
  setUserSession,
} from 'utils/helpers/userSession';
import { useUser } from 'utils/context/user';
import { UserLoginInfo } from 'utils/types/userType';

import styles from './auth.module.scss';
import { Routes } from 'utils/constants/routes';
import { Typography } from 'antd';

const { Title } = Typography;
export default function Auth(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectUrl = searchParams.get('redirect') ?? '/';

  const [passInputError, setPassError] = useState<boolean>(false);
  const { setUserLoggedin, setUserInfo } = useUser();

  const handleSumbit = async (event: any) => {
    event.preventDefault();

    // if (!event.target) {
    //   setPassError(false);
    //   return;
    // }
    const auth = await checkUserWithPassword(event.target.password.value);

    if (!auth) {
      notification({
        message: 'Password Error',
        description: 'Enter a Correct Password',
        messageType: 'error',
      });
      setPassError(true);
      return;
    }

    if (
      typeof auth.hdPriv == 'string' &&
      typeof auth.priv == 'string' &&
      typeof auth.pubad == 'string' &&
      typeof auth.pubkey == 'string'
    ) {
      const user: UserLoginInfo = {
        hdPriv: auth.hdPriv,
        priv: auth.priv,
        pubad: auth.pubad,
        pubkey: auth.pubkey,
      };

      await setUserSession(event.target.password.value);
      setUserInfo(user);
      setUserLoggedin(true);

      if (Object.values(Routes.authorizedRoutes).includes(redirectUrl)) {
        router.push(redirectUrl);
        return;
      } else {
        router.push('/');
      }
    }
  };

  return (
    <GlassCard>
      <div className={styles.layouts}>
        <Title className={styles.title} level={3}>
          Enter Your Password
        </Title>
        <form onSubmit={handleSumbit} method='post'>
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
            <div className={styles.button}>
              <Button text='Confirm' />
            </div>
          </div>
        </form>
      </div>
    </GlassCard>
  );
}
