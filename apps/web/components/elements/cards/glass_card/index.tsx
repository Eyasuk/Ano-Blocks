import styles from "./transparentCard.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function GlassCard({ children }: Props): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}
