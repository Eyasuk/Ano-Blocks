'use client';
import Default from 'components/layouts/default';
import Wallet from 'components/modules/walletcard';
import { useUser } from 'utils/context/user';

export default function HomePage(): JSX.Element {
  const { userLoggedin } = useUser();
  return <Default>{userLoggedin && <Wallet />}</Default>;
}
