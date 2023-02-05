import { ButtonProps } from "../types";

import styles from "./filledbutton.module.scss";

export default function FilledButton({ text }: ButtonProps): JSX.Element {
  return <button className={styles.container}>{text}</button>;
}
