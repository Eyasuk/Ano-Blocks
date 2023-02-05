'use client';
import { GlassCard } from 'components/elements/cards';
import Welcome from 'components/layouts/welcome';
import {
  GeneratePassPhrase,
  CreatePassword,
} from 'components/modules/createwallet_card';
import { useState } from 'react';

import styles from './new.module.scss';

export default function NewWallet() {
  const [steps, setSteps] = useState<1 | 2>(1);

  return (
    <Welcome>
      <GlassCard>
        <div className={styles.container}>
          {steps == 1 ? (
            <GeneratePassPhrase stateChanger={setSteps} />
          ) : (
            <CreatePassword stateChanger={setSteps} />
          )}
        </div>
      </GlassCard>
    </Welcome>
  );
}
