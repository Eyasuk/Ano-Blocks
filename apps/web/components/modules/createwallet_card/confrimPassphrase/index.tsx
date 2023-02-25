'use client';
import { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { GlassCard } from 'components/elements/cards';
import { OutlinedButton, FilledButton } from 'components/elements/buttons';
import { chooseRandomPasspharse } from 'utils/helpers/chooseRandomPassPharse';
import { createWallet } from 'utils/helpers/createWallet';
import { RandomPassphraseType, ConfirmPasspraseProps } from './types';

import styles from './confirmPassphrase.module.scss';
import { create } from 'domain';

export default function ConfirmPassphrase({
  passphrase,
}: ConfirmPasspraseProps): JSX.Element {
  const [randomPassphrase, setRandomPassphrase] =
    useState<RandomPassphraseType>();

  const [passphraseCoosen, setPassphraseCoosen] = useState<boolean[]>(
    Array(4).fill(true)
  );

  useEffect(() => {
    const chooseRandomPass = chooseRandomPasspharse();
    if (chooseRandomPass) setRandomPassphrase(chooseRandomPass);
  }, []);

  const handleSumbit = (event: any) => {
    event.preventDefault();
    createWallet(passphrase);
    if (!event.target) {
      return;
    }
    let correctChoosen = Array(4).fill(false);
    let allWordSelected = true;
    let allWordCorrect = true;
    for (let i = 0; i <= 3; i++) {
      const choosenWord = 'input' + i;
      if (!event.target[choosenWord].value) {
        allWordSelected = false;
        break;
      }
      if (
        randomPassphrase &&
        event.target[choosenWord].value ==
          passphrase[randomPassphrase?.postion[i]]
      ) {
        correctChoosen[i] = true;
      }
    }
    if (!allWordSelected) console.log('notification');
    else if (correctChoosen.includes(false))
      setPassphraseCoosen(correctChoosen);
    else console.log('next page');
  };

  return (
    <div className={styles.layouts}>
      <p className={styles.title}>Confirm PassPhrase</p>
      <p className={styles.description}>
        {' '}
        Correctly Enter Your PassPhrase in Order!!
      </p>
      <form onSubmit={handleSumbit}>
        {randomPassphrase?.choosenWords.map((items, index) => {
          return (
            <div className={styles.passphraseChoice} key={index}>
              <div className={styles.passphraseNumber}>
                <h2 className={styles.passphraseNo}>
                  {randomPassphrase.postion[index] + 1}
                </h2>
                <p>word</p>
              </div>

              <div className={styles.row}>
                {items.map((subitems, subindex) => {
                  return (
                    <div className={styles.oneitem} key={index + subindex}>
                      <input
                        className={styles.input}
                        type='radio'
                        name={index.toString()}
                        id={'input' + index.toString()}
                        alt={passphrase[subitems]}
                        value={passphrase[subitems]}
                      />
                      <label
                        className={
                          passphraseCoosen[index] ? styles.labels : styles.error
                        }
                        htmlFor={(index + subindex).toString()}
                      >
                        {passphrase[subitems]}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className={styles.button}>
          <OutlinedButton text='Finsh' />
        </div>
      </form>
    </div>
  );
}
