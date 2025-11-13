import styles from "../componentsStyles/Services.module.css";
import Image from "next/image";
const items = [
  { title: "NECK AND BACK PAIN CARE", img: "/images/neckback.avif" },
  { title: "SPORTS PHYSIOTHERAPY", img: "/images/sports.avif" },
  { title: "NEUROLOGICAL PHYSIOTHERAPY", img: "/images/neuro.avif" },
  { title: "CHIROPRACTIC CARE", img: "/images/chiro.avif" },
  { title: "POST OPERATIVE PHYSIOTHERAPHY", img: "/images/operative.avif" },
  { title: "OLD AGE PHYSIOTHERAPY", img: "/images/oldage.avif" },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>OUR SERVICES</h2>
      <hr />
      <div className={styles.grid}>
        {items.map((it, idx) => (
          <div key={idx} className={styles.card}>
            <Image src={it.img} alt={it.title}   width={300} height={300} loading="lazy"/>
    
            <h4>{it.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
