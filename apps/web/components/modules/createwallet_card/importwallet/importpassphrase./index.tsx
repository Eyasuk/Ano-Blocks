'use client';
import { useState, useEffect, useRef } from 'react';
import { Switch } from 'antd';
import { OutlinedButton } from 'components/elements/buttons';
import Input from 'components/elements/input';
import { notification } from 'components/elements/notification';
import { PassphraseTypes } from './types';

import styles from './importphrase.module.scss';

export default function ImportPassphrase({
  passPhrase,
  setpassPhrase,
  stateChanger,
  setExtraPassphrase,
}: PassphraseTypes): JSX.Element {
  const [copy, setCopie] = useState<boolean>(false);
  const [extraWord, setExtraWord] = useState<boolean>(false);
  const passphraseFetchedRef = useRef<boolean | null>(false);

  useEffect(() => {
    for (let i = 0; i < 12; i++) {
      const c = document.getElementById('input' + i) as HTMLInputElement;
      if (c.value != '') {
        const passphraseArray = c.value.split(' ');
        if (passphraseArray.length == 1) {
          return;
        }
        if (passphraseArray.length != 12) {
          notification({
            message: 'Incorrect passphrase',
            messageType: 'error',
            description:
              'Make sure to to copy all passphrases separted by only space',
          });
          return;
        }
        setpassPhrase(passphraseArray);
      }
    }
  }, [copy]);

  const handleSumbit = async (event: any) => {
    event.preventDefault();

    if (!event.target) {
      return;
    }
    const extraWordInput = document.getElementById(
      'extraword'
    ) as HTMLInputElement;

    setExtraPassphrase(extraWordInput.value);
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
    setCopie(!copy);
  };

  const onChange = (value: string, index: number) => {
    let temp = [];
    for (let i = 0; i < 12; i++) {
      if (i === index) {
        temp[i] = value;
      } else {
        temp[i] = passPhrase[i];
      }
    }
    setpassPhrase(temp);
  };

  const handleSwitch = () => {
    const extraWordInput = document.getElementById(
      'extraword'
    ) as HTMLInputElement;
    if (extraWord) extraWordInput.value = '';
    setExtraWord((prev) => !prev);
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className={styles.layouts}>
        <p className={styles.title}>Import Wallet</p>
        <p className={styles.description}>
          {' '}
          Please Enter Your PassPhrase Correctly by Entering One by One or Copy
          it in The First Field!!
        </p>

        <div className={styles.passphrase}>
          {passPhrase.map((content, index) => {
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
                    onChange={(event) => onChange(event.target.value, index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.extraWord}>
          <div className={styles.extraWordSwitch}>
            <p className={styles.extraWordLabel}>Add Extra Word</p>
            <Switch
              onChange={handleSwitch}
              className={styles.switch}
              checked={extraWord}
            />
          </div>
          <div className={styles.extraWordInput}>
            <Input
              id='extraword'
              inputType='text'
              error={false}
              disabled={!extraWord}
            />
          </div>
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
