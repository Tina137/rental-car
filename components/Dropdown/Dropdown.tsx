"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styles from "./Dropdown.module.css";
import { it } from "node:test";

interface MyDropdownProps {
  upperText: string;
  triggerText: string;
  itemsArr: string[];
  name: string;
  value: string;
  onChange: (v: string) => void;
}

export function MyDropdown({
  upperText,
  triggerText,
  itemsArr,
  name,
  value,
  onChange,
}: MyDropdownProps) {
  const selected = value || triggerText;

  const handleSelect = (item: string) => {
    if (name == "price") {
      onChange(`To $${item}`);
    } else {
      onChange(item);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.upper}>{upperText}</p>

      <input type="hidden" name={name} value={value} />

      <DropdownMenu.Root>
        <DropdownMenu.Trigger className={styles.trigger}>
          {selected}
          <svg className={styles.arrow} width="16" height="16">
            <use href="/sprite.svg#icon-Property-1Default-1" />
          </svg>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content sideOffset={4} className={styles.content}>
          {itemsArr.map((item) => (
            <DropdownMenu.Item
              key={item}
              className={`${styles.item} ${
                value === item ? styles.selected : ""
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
