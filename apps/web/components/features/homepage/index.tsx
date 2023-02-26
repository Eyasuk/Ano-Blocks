'use client';
import { redirect } from 'next/navigation';
import Default from 'components/layouts/default';

import Wallet from 'components/modules/walletcard';
import { useEffect } from 'react';
import { useUser } from 'utils/hooks/user';
//import styles from "./homepage.module.scss";

export default function HomePage(): JSX.Element {
  const { userLoggedin } = useUser();
  useEffect(() => {
    if (!userLoggedin) {
      redirect('/intro');
    }
  }, []);
  return <Default>{userLoggedin && <Wallet />}</Default>;
}
