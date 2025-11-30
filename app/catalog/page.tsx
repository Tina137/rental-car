import Image from "next/image";
import styles from "./page.module.css";
import Filtration from "@/components/Filtration/Filtration";
import { getBrands } from "@/lib/api/clientApi";

export default async function Home() {
  const brands = await getBrands();
  return (
    <section className={styles.catalog}>
      <Filtration brands={brands} />
    </section>
  );
}
