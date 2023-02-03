import Header from "components/modules/header";

import styles from "./layout.module.scss";

type Props = {
    children: React.ReactNode;
};

export default function Default({ children }: Props): JSX.Element {
    return (
        <div className={styles.default}>
            <Header />
            <div className={styles.content}>{children}</div>
        </div>
    );
}
