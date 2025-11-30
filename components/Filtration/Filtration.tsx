"use client";

import css from "./Filtration.module.css";
import { MyDropdown } from "../Dropdown/Dropdown";
import { useState } from "react";

export default function Filtration({ brands }: { brands: string[] }) {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const pricesArr = ["30", "40", "50", "60", "70", "80"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("BRAND:", brand);
    console.log("PRICE:", price);
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

        <button type="submit">Search</button>
      </form>
    </div>
  );
}
