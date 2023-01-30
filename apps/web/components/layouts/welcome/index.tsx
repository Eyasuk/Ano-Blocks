import Image from 'next/image';

import styles from "./welcome.module.scss";

type Props = {
    children: React.ReactNode;
};

export default function Welcome({ children }: Props): JSX.Element {
    return (
        <div className={styles.welcome}>
            <div className={styles.logo}>
                <Image className={styles.image} alt='logo of ano block' src='/icons/logo.svg' height={0} width={0} />
            </div>
            <h1 className={styles.title}>Welcome to Anoblocks</h1>
            <div className={styles.content}>{children}</div>
        </div>
    );
}
