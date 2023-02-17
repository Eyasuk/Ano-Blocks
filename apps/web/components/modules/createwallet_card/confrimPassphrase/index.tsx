'use client';
import { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { GlassCard } from 'components/elements/cards';
import { OutlinedButton, FilledButton } from 'components/elements/buttons';
import { chooseRandomPasspharse } from 'utils/helpers/chooseRandomPassPharse';
import { RandomPassphraseType, ConfirmPasspraseProps } from './types';

import styles from './confirmPassphrase.module.scss';

export default function ConfirmPassphrase({
  passphrase,
}: ConfirmPasspraseProps): JSX.Element {
  const [randomPassphrase, setRandomPassphrase] =
    useState<RandomPassphraseType>();

  useEffect(() => {
    const chooseRandomPass = chooseRandomPasspharse();
    console.log(chooseRandomPass);
    if (chooseRandomPass) setRandomPassphrase(chooseRandomPass);
  }, []);
  return (
    <div className={styles.layouts}>
      <p className={styles.title}>Confirm PassPhrase</p>
      <p className={styles.description}>
        {' '}
        Correctly Enter Your PassPhrase in Order!!
      </p>

      {randomPassphrase?.choosenWords.map((items, index) => {
        return (
          <div className={styles.passphraseChoice}>
            <div className={styles.passphraseNumber}>
              <h2 className={styles.passphraseNo}>
                {randomPassphrase.postion[index] + 1}
              </h2>
              <p>word</p>
            </div>

            <div key={index} className={styles.row}>
              {items.map((subitems, subindex) => {
                return (
                  <div className={styles.oneitem}>
                    <input
                      className={styles.input}
                      key={index + subindex}
                      type='radio'
                      name={index.toString()}
                      value={subindex}
                    />
                    <label
                      className={styles.labels}
                      key={index + subindex}
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
    </div>
  );
}
