import { OutlinedButton } from "components/elements/buttons";
import { GlassCard } from "components/elements/cards";
import Welcome from "components/layouts/welcome";
import {
  GeneratePassPhrase,
  CreatePassword,
} from "components/modules/createwallet_card";

import styles from "./new.module.scss";

export default function NewWallet() {
  return (
    <Welcome>
      <GlassCard>
        <div className={styles.container}>
          <GeneratePassPhrase />
          <div className={styles.button}><OutlinedButton text="Next" onClick={() => true} /></div>
           {/* <CreatePassword /> */}
        </div>
      </GlassCard>
    </Welcome>
  );
}
