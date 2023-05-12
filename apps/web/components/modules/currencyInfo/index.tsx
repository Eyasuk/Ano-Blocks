"use client";
import { GlassCard } from "components/elements/cards";

import styles from "./currencyInfo.module.scss";

export default function CurrencyInfo({ params }: { params: { slug: string } }) {
  console.log(params.slug);

  return (
    <GlassCard>
      <div className={styles.layouts}>{"router"}</div>
    </GlassCard>
  );
}
