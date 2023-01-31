import { IconButtonProps } from './type';

import styles from './icon.module.scss';

export default function Outlined({ icon, onClick }: IconButtonProps): JSX.Element {
    return (
        <button className={styles.container}>{icon}</button>
    );
}