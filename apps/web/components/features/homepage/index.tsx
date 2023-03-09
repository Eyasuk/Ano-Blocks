'use client';

import Default from 'components/layouts/default';

import Wallet from 'components/modules/walletcard';
import { useEffect } from 'react';
import { useUser } from 'utils/context/user';

//import styles from "./homepage.module.scss";

export default function HomePage(): JSX.Element {
  const { userLoggedin } = useUser();
  return <Default>{userLoggedin && <Wallet />}</Default>;
}
