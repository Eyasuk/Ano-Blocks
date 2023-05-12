"use client";
import { useEffect, useState } from "react";
import { GlassCard } from "components/elements/cards";
import { Assets } from "utils/constants/assets";

import styles from "./currencyInfo.module.scss";

export default function CurrencyInfo({ params }: { params: { slug: string } }) {
  const [asset, setAsset] = useState<string>();

  useEffect(() => {
    const assetNames = Assets.map((item) => {
      return item.name.toLocaleLowerCase();
    });
    console.log(assetNames);
    if (assetNames.includes(params.slug.toLocaleLowerCase())) {
      setAsset(params.slug);
    }
  }, []);

  return (
    <GlassCard>
      {asset != undefined && (
        <div className={styles.layouts}>{params.slug}</div>
      )}
    </GlassCard>
  );
}
