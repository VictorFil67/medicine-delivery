// import React from "react";

import { Medicines } from "../../components/Medicines/Medicines";
import { Shops } from "../../components/Shops/Shops";
import s from "./ShopPage.module.css";

export const ShopPage = () => {
  return (
    <main className={s.mainShops}>
      <section className={s.shops}>
        <Shops />
      </section>
      <section className={s.medicines}>
        <Medicines />
      </section>
    </main>
  );
};
