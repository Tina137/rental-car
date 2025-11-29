"use client";
import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styles from "./Dropdown.module.css";

interface MyDropdownProps {
  upperText: string;
  triggerText: string;
  itemsArr: string[];
}

export function MyDropdown({
  upperText,
  triggerText,
  itemsArr,
}: MyDropdownProps) {
  const [selected, setSelected] = useState(triggerText);

  const handleSelect = (item: string) => {
    setSelected(item);
  };

  return (
    <div className={styles.container}>
      <p className={styles.upper}>{upperText}</p>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className={styles.trigger}>
          {selected}
          <svg className={styles.arrow} width="16" height="16">
            <use href="/sprite.svg#icon-Property-1Default-1" />
          </svg>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content sideOffset={4} className={styles.content}>
          {itemsArr.map((item, index) => (
            <DropdownMenu.Item
              key={`${item}-${index}`}
              className={`${styles.item} ${
                selected === item ? styles.selected : ""
              }`}
              onSelect={() => handleSelect(item)}
            >
              {item}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
