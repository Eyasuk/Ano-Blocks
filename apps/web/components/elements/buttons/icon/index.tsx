'use client';
import { IconButtonProps } from './type';

import styles from './icon.module.scss';

export default function IconButton({
  icon,
  onClick,
}: IconButtonProps): JSX.Element {
  return (
    <button className={styles.container} onClick={(_event) => onClick()}>
      {icon}
    </button>
  );
}
