'use client';
import { useState, useEffect, useRef } from 'react';
import { CopyOutlined, DownloadOutlined } from '@ant-design/icons';
import { GlassCard } from 'components/elements/cards';
import {
  OutlinedButton,
  FilledButton,
  IconButton,
} from 'components/elements/buttons';
import { generatePassPhrase } from 'utils/services/wallet/generateMnemonic';
import { downloadFile } from 'utils/helpers/downloadfile';
import { PassphraseTypes } from './types';
import styles from './newpassphrase.module.scss';

export default function Introduction({
  passPhrase,
  setpassPhrase,
  stateChanger,
}: PassphraseTypes): JSX.Element {
  //const [passphrase, setPassphrase] = useState<string[]>([]);
  const passphraseFetchedRef = useRef<boolean | null>(false);

  useEffect(() => {
    if (passphraseFetchedRef.current) return;
    passphraseFetchedRef.current = true;
    const temp = generatePassPhrase();
    setpassPhrase(temp);
  }, []);

  const downloadPassPhrase = () => {
    if (passPhrase != null) downloadFile(passPhrase, 'ano', true);
  };

  const buttonAction = () => {
    stateChanger(2);
  };

  return (
    <div className={styles.layouts}>
      <p className={styles.title}>Create Wallet</p>
      <p className={styles.description}>
        {' '}
        Make Sure You copy a passphrase and store it in Safe Place! Fund Can not
        be recovered with out passphrase!!
      </p>
      <div className={styles.passphrase}>
        {passPhrase.map((content, index) => {
          return (
            <div className={styles.wordinputfield} key={index}>
              <p className={styles.index}>{index + 1 + '.'}</p>
              <p className={styles.content}>{content}</p>
            </div>
          );
        })}
      </div>
      <span className={styles.icons}>
        <IconButton icon={<DownloadOutlined />} onClick={downloadPassPhrase} />
        <div className={styles.button}>
          <OutlinedButton text='Next' onClick={buttonAction} />
        </div>
      </span>
    </div>
  );
}
