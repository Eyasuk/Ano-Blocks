'use client';
import { useState, useEffect, useRef } from 'react';
import { OutlinedButton } from 'components/elements/buttons';

import { PassphraseTypes } from './types';

import styles from './importphrase.module.scss';
import Input from 'components/elements/input';
import { notification } from 'components/elements/notification';

export default function ImportPassphrase({
  passPhrase,
  setpassPhrase,
  stateChanger,
}: PassphraseTypes): JSX.Element {
  //const [passphrase, setPassphrase] = useState<string[]>([]);
  const passphraseFetchedRef = useRef<boolean | null>(false);
  const [userPassphrase, setPassphrase] = useState<Array<string>>(
    Array(12).fill('')
  );
  useEffect(() => {}, []);

  const handleSumbit = async (event: any) => {
    event.preventDefault();
    if (!event.target) {
      return;
    }

    for (let i = 0; i < 12; i++) {
      if (!event.target['input' + i].value) {
        notification({
          message: 'Empty field',
          messageType: 'error',
          description:
            'Make sure to fill every field or copy all passphrase on one field',
        });
        return;
      }
    }

    stateChanger(2);
  };

  const handelCopy = () => {
    for (let i = 0; i < 12; i++) {
      const c = document.getElementById('input' + i) as HTMLInputElement;
      if (c.value != '') {
        const passphraseArray = c.value.split(' ');
        if (passphraseArray.length != 12) {
          notification({
            message: 'Incorrect passphrase',
            messageType: 'error',
            description:
              'Make sure to to copy all passphrases separted by only space',
          });
          return;
        }
        setPassphrase(passphraseArray);
        setpassPhrase(passphraseArray);
        return;
      }
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className={styles.layouts}>
        <p className={styles.title}>Import Wallet</p>
        <p className={styles.description}>
          {' '}
          Please Enter Your PassPhrase Correctly by Entering One by One or Copy
          it in One Field!!
        </p>

        <div className={styles.passphrase}>
          {userPassphrase.map((content, index) => {
            return (
              <div className={styles.input} key={index}>
                <p className={styles.index}>{index + 1 + '.'}</p>
                <div className={styles.wordinputfield} key={index}>
                  <Input
                    value={passPhrase[index]}
                    error={false}
                    inputType={'text'}
                    minLength={2}
                    name={'input' + index}
                    id={'input' + index}
                    onPasteCapture={handelCopy}
                    // onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <span className={styles.icons}>
          <div className={styles.button}>
            <OutlinedButton text='Next' />
          </div>
        </span>
      </div>
    </form>
  );
}
