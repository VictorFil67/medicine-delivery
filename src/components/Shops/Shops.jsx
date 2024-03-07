// import React from "react";
import { pharmacies } from "./pharmacies";
import s from "./Shops.module.css";

export const Shops = () => {
  function showMedicines(id) {}
  return (
    <div>
      <h2>Shops:</h2>
      <ul className={s.shopsList}>
        {pharmacies.map((pharmacy) => (
          <li className={s.shop} key={pharmacy.id}>
            <button
              className={s.shopButton}
              type="button"
              onClick={showMedicines}
            >
              {pharmacy.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
