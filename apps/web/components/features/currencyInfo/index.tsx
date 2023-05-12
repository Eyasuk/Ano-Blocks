import Default from "components/layouts/default";
import CurrencyInfo from "components/modules/currencyInfo";

export default function CurrencyInfoPage({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return (
    <Default>
      <CurrencyInfo params={params} />
    </Default>
  );
}
