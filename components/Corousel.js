"use client";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../componentsStyles/Corousel.module.css";
import { useCallback } from "react";

export default function Courousel({items,Card}) {
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
  
      <div className={styles.embla}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {items.map((it, i) => (
              <div className={styles.emblaSlide} key={i}>
                <div className={styles.Card}>
                    <Card it={it}/>
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

  );
}