'use client';
import { useEffect, useRef, useState } from 'react';
import { Switch } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { OutlinedButton, IconButton } from 'components/elements/buttons';
import Input from 'components/elements/input';
import { generatePassPhrase } from 'utils/helpers/createWallet';
import { downloadFile } from 'utils/helpers/downloadfile';
import { PassphraseTypes } from './types';
import styles from './newpassphrase.module.scss';
import { Typography } from 'antd';

const { Title, Text } = Typography;
export default function NewPassphrase({
  passPhrase,
  setpassPhrase,
  stateChanger,
  setExtraPassphrase,
}: PassphraseTypes): JSX.Element {
  const passphraseFetchedRef = useRef<boolean | null>(false);
  const [extraWord, setExtraWord] = useState<boolean>(false);

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
    const extraWordInput = document.getElementById(
      'extraword'
    ) as HTMLInputElement;
    setExtraPassphrase(extraWordInput.value);
  };

  const handleSwitch = () => {
    const extraWordInput = document.getElementById(
      'extraword'
    ) as HTMLInputElement;
    if (extraWord) extraWordInput.value = '';
    setExtraWord((prev) => !prev);
  };

  return (
    <div className={styles.layouts}>
      <Title level={3} className={styles.title}>
        Create Wallet
      </Title>
      <Text type='warning' className={styles.description}>
        {' '}
        Make Sure You copy a passphrase and store it in Safe Place! Fund Can not
        be recovered with out passphrase!!
      </Text>
      <div className={styles.passphrase}>
        {passPhrase.map((content, index) => {
          return (
            <div className={styles.wordinputfield} key={index}>
              <Text className={styles.index}>{index + 1 + '.'}</Text>
              <Text className={styles.content}>{content}</Text>
            </div>
          );
        })}
      </div>
      <div className={styles.extraWord}>
        <div className={styles.extraWordSwitch}>
          <Text className={styles.extraWordLabel}>Add Extra Word</Text>
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
        <IconButton icon={<DownloadOutlined />} onClick={downloadPassPhrase} />
        <div className={styles.button}>
          <OutlinedButton text='Next' onClick={buttonAction} />
        </div>
      </span>
    </div>
  );
}
