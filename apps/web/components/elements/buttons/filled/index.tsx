import { ButtonProps } from '../types';

import styles from './filledbutton.module.scss';

export default function FilledButton({
  text,
  onClick,
}: ButtonProps): JSX.Element {
  return onClick ? (
    <button className={styles.container} onClick={(_event) => onClick()}>
      {text}
    </button>
  ) : (
    <button className={styles.container}>{text}</button>
  );
}
