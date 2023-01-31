import Welcome from 'components/layouts/welcome';
import { GeneratePassPhrase } from 'components/modules/createwallet_card';

import styles from './new.module.scss';

export default function NewWallet() {

    return (
        <Welcome>
            <div className={styles.container}>
                <GeneratePassPhrase />
            </div>
        </Welcome>
    );
}