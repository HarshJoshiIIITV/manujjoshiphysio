import styles from "../componentsStyles/Services.module.css";
import Image from "next/image";
import useMobile from "./useMobile";
import Courousel from "./Corousel";
const items = [
  { title: "NECK AND BACK PAIN CARE", img: "/images/neckback.avif" },
  { title: "SPORTS PHYSIOTHERAPY", img: "/images/sports.avif" },
  { title: "NEUROLOGICAL PHYSIOTHERAPY", img: "/images/neuro.avif" },
  { title: "CHIROPRACTIC CARE", img: "/images/chiro.avif" },
  { title: "POST OPERATIVE PHYSIOTHERAPHY", img: "/images/operative.avif" },
  { title: "OLD AGE PHYSIOTHERAPY", img: "/images/oldage.avif" },
];

const Card = ({ it }) => {
  return (
    <>
      <Image
        src={it.img}
        alt={it.title}
        loading="lazy"
          width={0}
        height={0}
        sizes="100%"
        style={{ width: "300px", height: "300px", objectFit: "cover",borderRadius:'50%' }}
      />
      <h4>{it.title}</h4>
    </>
  );
};

export default function Services() {
  const { isMobile } = useMobile();
  return (
    <section className={styles.services}>
      <h2>OUR SERVICES</h2>
      <hr />
       {isMobile ? 
          <Courousel items={items} Card={Card} />
         :
      <div className={styles.grid}>
        
          {items.map((it, idx) => (
            <div key={idx} className={styles.card}>
              <Card it={it} />
            </div>
          ))}
        
      </div>}
    </section>
  );
}
