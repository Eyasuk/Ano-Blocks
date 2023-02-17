'use client';
import { useState } from 'react';
import { GlassCard } from 'components/elements/cards';
import Welcome from 'components/layouts/welcome';
import {
  GeneratePassPhrase,
  CreatePassword,
} from 'components/modules/createwallet_card';

import styles from './new.module.scss';
import ConfirmPassphrase from 'components/modules/createwallet_card/confrimPassphrase';

export default function NewWallet() {
  const [steps, setSteps] = useState<1 | 2 | 3>(1);
  const [passphrase, setPassphrase] = useState<string[]>([]);
  const [password, setPassword] = useState<string>('');

  return (
    <Welcome>
      <GlassCard>
        <div className={styles.container}>
          {(() => {
            switch (steps) {
              case 1:
                return (
                  <GeneratePassPhrase
                    stateChanger={setSteps}
                    passPhrase={passphrase}
                    setpassPhrase={setPassphrase}
                  />
                );
              case 2:
                return (
                  <CreatePassword
                    stateChanger={setSteps}
                    setPassword={setPassword}
                  />
                );
              case 3:
                return <ConfirmPassphrase passphrase={passphrase} />;
              default:
                null;
            }
          })()}
        </div>
      </GlassCard>
    </Welcome>
  );
}
