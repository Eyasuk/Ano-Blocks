'use client';
import { redirect } from 'next/navigation';
import Default from 'components/layouts/default';

import Wallet from 'components/modules/walletcard';
import { useEffect } from 'react';
import { useUser } from 'utils/hooks/user';
import { checkIfUserLogin } from 'utils/helpers/userSession';
//import styles from "./homepage.module.scss";

export default function HomePage(): JSX.Element {
  const { userLoggedin } = useUser();
  useEffect(() => {
    const user = checkIfUserLogin();
    if (user && !userLoggedin) {
      redirect('/auth');
    }
    if (!user) redirect('/intro');
  }, []);
  return <Default>{userLoggedin && <Wallet />}</Default>;
}
