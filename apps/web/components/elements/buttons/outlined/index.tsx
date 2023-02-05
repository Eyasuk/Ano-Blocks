import { ButtonProps } from '../types';

import styles from './outlined.module.scss';

export default function Outlined({ text, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={styles.container} onClick={(_event) => onClick()}>
      {text}
    </button>
  );
}
