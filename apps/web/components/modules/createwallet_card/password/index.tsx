import { useState } from 'react';
import Input from 'components/elements/input';
import { OutlinedButton } from 'components/elements/buttons';
import { PasswordTypes } from './types';

import styles from './password.module.scss';

export default function CreatePassword({
  stateChanger,
}: PasswordTypes): JSX.Element {
  const [retypeInputError, setRetypeError] = useState<boolean>(false);
  const [passInputError, setPassError] = useState<boolean>(false);

  const buttonAction = () => {
    stateChanger(2);
  };
  return (
    <div className={styles.layouts}>
      <p className={styles.title}>New Password</p>
      <p className={styles.description}>
        {' '}
        Password will insure you wallet safe but It is temporary, If you forget
        your password you can recover using your passphrase!!
      </p>
      <div className={styles.form}>
        <Input
          label='Password'
          inputType='password'
          autoComplete='off'
          error={passInputError}
          id='password'
        />
        <Input
          label='Retype Password'
          inputType='password'
          autoComplete='off'
          error={retypeInputError}
          id='repassword'
        />
        <div className={styles.button}>
          <OutlinedButton text='Next' onClick={buttonAction} />
        </div>
      </div>
    </div>
  );
}
