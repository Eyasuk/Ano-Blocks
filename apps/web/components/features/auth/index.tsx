'use client';
import { redirect } from 'next/navigation';
import Welcome from 'components/layouts/welcome';

import Auth from 'components/modules/auth';
import { useEffect } from 'react';
import { useUser } from 'utils/context/user';
//import styles from "./homepage.module.scss";

export default function HomePage(): JSX.Element {
  return (
    <Welcome>
      <Auth />
    </Welcome>
  );
}
