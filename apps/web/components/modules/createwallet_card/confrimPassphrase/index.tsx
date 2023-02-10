'use client';
import { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { GlassCard } from 'components/elements/cards';
import { OutlinedButton, FilledButton } from 'components/elements/buttons';
import { chooseRandomPasspharse } from 'utils/helpers/chooseRandomPassPharse';
import { RandomPassphraseType } from './types';

import styles from './confirmPassphrase.module.scss';

export default function ConfirmPassphrase(): JSX.Element {
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
          <div key={index}>
            {items.map((subitems, subindex) => {
              if (randomPassphrase.postion[index] == subindex) {
                <h1 key={subindex}>{subitems}</h1>;
              } else {
                return <h6 key={subindex}>{subitems}</h6>;
              }
            })}
          </div>
        );
      })}
      {/* {randomPassphrase?.choosenWords.map((item, index) => {
        return item.map((value, i) => {
          randomPassphrase.postion[index] == i ? (
            <h1>{value}</h1>
          ) : (
            <p>{value}</p>
          );
        });
      })} */}
    </div>
  );
}
