import Image from "next/image";
import styles from "./page.module.css";
import Filtration from "@/components/Filtration/Filtration";

export default function Home() {
  return (
    <section className={styles.catalog}>
      <Filtration />
    </section>
  );
}
