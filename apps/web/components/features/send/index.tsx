'use client';
import Default from 'components/layouts/default';
import Welcome from 'components/layouts/welcome';
import Send from 'components/modules/send';

export default function SendPage(): JSX.Element {
  return <Welcome>{<Send />}</Welcome>;
}
