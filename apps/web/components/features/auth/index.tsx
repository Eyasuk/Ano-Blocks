import Welcome from 'components/layouts/welcome';
import Auth from 'components/modules/auth';

export default function HomePage(): JSX.Element {
  return (
    <Welcome>
      <Auth />
    </Welcome>
  );
}
