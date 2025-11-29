import Link from "next/link";
import css from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={css.hero}>
      <div className="wrapper">
        <div className={css.contentContainer}>
          <h1 className={css.title}>Find your perfect rental car</h1>
          <p className={css.text}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <Link href="/catalog" className="button">
            View Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
