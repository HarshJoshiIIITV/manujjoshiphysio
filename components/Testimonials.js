import styles from "../componentsStyles/testimonials.module.css";
import Link from "next/link";
import Image from "next/image";
import Courousel from "./Corousel";

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

const Card = ({ it }) => {
  return (
    <>
      <Image
        src={it.photo}
        alt={it.name}
        loading="lazy"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "100%", height: "300px", objectFit: "cover",borderRadius:'50%' }}
      />

      <h5>{it.text}<Link href={it.link} target="_blank" rel="noopener noreferrer">
        Read full review
      </Link></h5> 
      <p>{it.name}</p>
    </>
  );
};

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>OUR PATIENTS SPEAK FOR US</h2>
      <hr />
      <Courousel items={items} Card={Card} />
    </section>
  );
}
