import { CopyIcon, QrIcon } from 'components/elements/icons';
import { GlassCard } from 'components/elements/cards';
import { FilledButton, OutlinedButton } from 'components/elements/buttons';

import styles from './walletcard.module.scss';
export default function Wallet(): JSX.Element {
    return (
        <div className={styles.container}>
            <GlassCard>
                <div className={styles.layout}>
                    <div className={styles.column}>
                        <p className={styles.title}>Total portfolio value</p>
                        <h2>ETB 0.00</h2>
                    </div>

                    <div className={styles.line}></div>
                    <div className={(styles.column, styles.walletaddress)}>
                        <p className={styles.title}>Main account</p>
                        <div className={styles.walletinfo}>
                            <h2>ffffff</h2>
                            <div className={styles.icons}>
                                <CopyIcon className={styles.icon} />
                                <QrIcon className={styles.icon} />
                            </div>
                        </div>
                    </div>


                    <div className={styles.leftButton}>
                        <FilledButton text='Receive' onClick={() => true} />
                        <OutlinedButton text='Send' onClick={() => true} />
                    </div>
                </div>
            </GlassCard>
        </div>
    )
}