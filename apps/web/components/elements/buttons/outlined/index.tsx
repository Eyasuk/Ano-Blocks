import { ButtonProps } from '../types';

import styles from './outlined.module.scss';

export default function Outlined({ text, }: ButtonProps): JSX.Element {
    return (
        <button className={styles.container}>{text}</button>
    );
}