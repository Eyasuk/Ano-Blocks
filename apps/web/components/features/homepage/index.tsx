import Default from "components/layouts/default";

import Wallet from "components/modules/walletcard";
//import styles from "./homepage.module.scss";

export default function HomePage(): JSX.Element {
  return (
    <Default>
      <Wallet />
    </Default>
  );
}
