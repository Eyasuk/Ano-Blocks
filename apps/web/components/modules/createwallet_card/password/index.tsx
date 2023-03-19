'use client';
import { useState } from 'react';
import Input from 'components/elements/input';
import { OutlinedButton } from 'components/elements/buttons';
import { PasswordTypes } from './types';

import styles from './password.module.scss';

export default function CreatePassword({
  setPassword,
  stateChanger,
}: PasswordTypes): JSX.Element {
  const [retypeInputError, setRetypeError] = useState<boolean>(false);
  const [passInputError, setPassError] = useState<boolean>(false);

  const handleSumbit = (event: any) => {
    event.preventDefault();
    if (!event.target) {
      setPassError(false);
      setRetypeError(false);
      return;
    }
    if (event.target.password.value != event.target.repassword.value) {
      setRetypeError(true);
      return;
    }
    setPassword(event.target.password);
    stateChanger(3);
  };

  return (
    <div className={styles.layouts}>
      <p className={styles.title}>New Password</p>
      <p className={styles.description}>
        {' '}
        Password will insure you wallet safe but It is temporary, If you forget
        your password you can recover using your passphrase!!
      </p>
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
            error={retypeInputError}
            id='repassword'
            name='repassword'
            required
            minLength={5}
          />
          <div className={styles.button}>
            <OutlinedButton text='Next' />
          </div>
        </div>
      </form>
    </div>
  );
}
