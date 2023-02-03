import { GlassCard } from "components/elements/cards";
import styles from "./password.module.scss";

export default function CreatePassword(): JSX.Element {
  return (
    <div className={styles.container}>
      <GlassCard>
        <div className={styles.layout}>
          <p className={styles.title}>Create Wallet</p>
          <p className={styles.description}>
            {" "}
            Password will insure you wallet safe but It is temporary, If you
            forget your password you can recover using your passphrase!!
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
