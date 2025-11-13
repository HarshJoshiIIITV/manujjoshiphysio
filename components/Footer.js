import Link from "next/link";
import styles from "../componentsStyles/Footer.module.css";
import Image from "next/image";

const icons = [
  {
    name: "Instagram",
    src: "/images/instagram.svg",
    href: "https://www.instagram.com/drmanujjoshiphysio/",
  },
  {
    name: "Facebook",
    src: "/images/facebook.svg",
    href: "https://www.facebook.com/people/Dr-Manuj-joshi-physiotherapy-Clinic/61563212639550/#",
  },
  {
    name: "YouTube",
    src: "/images/youtube.svg",
    href: "https://www.youtube.com/@drmanujjoshiphysio",
  },
  {
    name: "WhatsApp",
    src: "/images/whatsapp.svg",
    href: "https://wa.me/918619360651",
  },
];
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>CONNECT WITH US</h2>
      <hr />

      <div className={styles.mediaIcons}>
        {icons.map((icon) => (
          <Link
            key={icon.name}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.name}
          >
            <Image
              src={icon.src}
              alt={icon.name}
              width={48}
              height={48}
              className={styles.icon}
              loading="lazy"
            />
          </Link>
        ))}
      </div>
      <hr />
      <h5 className={styles.copyright}>
        Copyright © 2025 Dr.Manuj Joshi - All Rights Reserved.
      </h5>
    </footer>
  );
}
