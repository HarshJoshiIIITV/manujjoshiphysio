"use client";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../componentsStyles/testimonials.module.css";
import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
const items = [
  {
    text: "I had back problems for the past one year and I took different treatments 2-3 time...",
    link: "https://maps.app.goo.gl/sJUetPzNqQnUq4XV9",
    name: "Akash jakhar",
    photo: "/images/akashjakhar.avif",
  },
  {
    text: "100% genuine & accurate doctor. He is different from other physiotherapy, his proc...",
    link: "https://maps.app.goo.gl/rE7dnnp6W9SNWXC36",
    name: "Ritu parn",
    photo: "/images/rituparn.avif",
  },
  {
    text: "I have totally recovered from my acl3 tear surgery and i personally recommend…",
    link: "https://maps.app.goo.gl/o3rf2N4q7SSAe92f7",
    name: "Aman Jain",
    photo: "/images/aman.avif",
  },
  {
    text: "Dr. Manuj is a very good physiotherapist and his method of doing exercises is very good...",
    link: "https://maps.app.goo.gl/gEd7kAs2YezQKWDE9",
    name: "Arun chaudhary",
    photo: "/images/arun.avif",
  },
  {
    text: "Good physiotherapy center dr manuj is too intelligent and he is doing very properly manually...",
    link: "https://maps.app.goo.gl/g9FXzscuXKJzUfWZ6",
    name: "Suman maheshwari",
    photo: "/images/suman.avif",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className={styles.testimonials}>
      <h2>OUR PATIENTS SPEAK FOR US</h2>
      <hr />

      <div className={styles.embla}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {items.map((it, i) => (
              <div className={styles.emblaSlide} key={i}>
                <div className={styles.testimonialCard}>
              
                  <Image src={it.photo}
                    alt={it.name}
                    height={150}
                    loading="lazy"
                
                    width={150}/>

                  <h4>{it.text}</h4>
                  <Link
                    href={it.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read full review
                  </Link>
                  <p>{it.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.prevBtn} onClick={scrollPrev}>
          ‹
        </button>
        <button className={styles.nextBtn} onClick={scrollNext}>
          ›
        </button>
      </div>
    </section>
  );
}
