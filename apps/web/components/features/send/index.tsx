'use client';
import { redirect } from 'next/navigation';
import Default from 'components/layouts/default';

import Send from 'components/modules/send';
import { useEffect } from 'react';
import { useUser } from 'utils/context/user';
import { checkIfUserLogin } from 'utils/helpers/userSession';
//import styles from "./homepage.module.scss";

export default function SendPage(): JSX.Element {
  // const { userLoggedin } = useUser();
  // useEffect(() => {
  //   const user = checkIfUserLogin();
  //   console.log(user);
  //   console.log(!userLoggedin);
  //   if (user && !userLoggedin) {
  //     redirect('/auth');
  //   }
  //   if (!user) redirect('/send');
  // }, []);
  return <Default>{<Send />}</Default>;
}
