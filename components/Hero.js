
import styles from "../componentsStyles/Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import useMobile from "./useMobile";
export default function HeroSection() {
  const {isMobile}=useMobile();

  return (
    <section className={styles.hero}>
      {/* Optimized Background Image */}
      <Image
        src={isMobile ? '/images/heroimage-mobile.avif' : '/images/heroimage.avif'}
        alt="Physiotherapy clinic hero background"
        fill
        priority
        style={{ objectFit: "cover", zIndex: -2 }}
      />

      {/* Gradient Overlay */}
      <div className={styles.overlay}></div>

      {/* Text Content */}
      <div className={styles.text}>
        <h1>
          YOUR RECOVERY <br /> OUR COMMITMENT
        </h1>
        <hr />
        <h3>Personalized physiotherapy with care & proven results</h3>
        <Link
          className={styles.btn}
          href="https://wa.me/918619360651"
          target="_blank"
          rel="noreferrer"
        >
          Book your appointment
        </Link>
      </div>
    </section>
  );
}
