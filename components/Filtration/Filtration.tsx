"use client";

import css from "./Filtration.module.css";
import { MyDropdown } from "../Dropdown/Dropdown";
import { useState } from "react";

interface FiltrationProps {
  brands: string[];
  onSubmit: () => void;
}

export default function Filtration({ brands, onSubmit }: FiltrationProps) {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const pricesArr = ["30", "40", "50", "60", "70", "80"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className={css.filterContainer}>
      <form className={css.form} onSubmit={handleSubmit}>
        <MyDropdown
          upperText="Car brand"
          triggerText="Choose a brand"
          itemsArr={brands}
          name="brand"
          value={brand}
          onChange={setBrand}
        />

        <MyDropdown
          upperText="Price / 1 hour"
          triggerText="Choose a price"
          itemsArr={pricesArr}
          name="price"
          value={price}
          onChange={setPrice}
        />

        <div className={css.inputBigContainer}>
          <p className={css.label}>Сar mileage / km</p>
          <div className={css.inputContainer}>
            <div className={`${css.inputWrapper} ${css.inputWrapperLeft}`}>
              <span className={css.prefix}>From</span>
              <input name="min" className={css.input} type="number" min="0" />
            </div>

            <div className={`${css.inputWrapper} ${css.inputWrapperRight}`}>
              <span className={css.prefix}>To</span>
              <input name="max" className={css.input} type="number" min="0" />
            </div>
          </div>
        </div>

        <button className={`button ${css.submitButton}`} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
