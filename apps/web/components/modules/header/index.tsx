'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import NavBar from 'components/modules/navbar';
import { LogoutIcon, SettingIcon } from 'components/elements/icons';
import { logout } from 'utils/helpers/userSession';
import { useUser } from 'utils/context/user';

import styles from './header.module.scss';

export default function Header(): JSX.Element {
  const { setUserLoggedin, setUserInfo } = useUser();
  const router = useRouter();

  const handelLogout = () => {
    logout();
    setUserInfo(null);
    setUserLoggedin(false);
    router.push('/intro');
  };
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image
          className={styles.image}
          alt='logo of ano block'
          src='/icons/logo.svg'
          height={0}
          width={0}
        />
        <h2 className={styles.title}>AnoBlocks</h2>
      </div>
      <NavBar />
      <div className={styles.left}>
        <SettingIcon className={styles.icons} />
        <LogoutIcon className={styles.icons} onClick={handelLogout} />
      </div>
    </header>
  );
}
