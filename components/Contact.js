import Link from "next/link";
import styles from "../componentsStyles/contact.module.css";
import Image from "next/image";
export default function ContactForm() {
  return (
    <>
      <section className={styles.contact}>
        <h2>CONTACT US</h2>
        <hr />
        <section className={styles.contactForms}>
          <aside className={styles.info}>
            <h3>Schedule your appointment — your body will thank you</h3>
            <div className={styles.contactButton}>
              <Link
                href="https://wa.me/918619360651"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <Image
                  src={"/images/whatsapp.svg"}
                  alt={"Whatsapp"}
                  width={32}
                  height={32}
                  className={styles.icon}
                  loading="lazy"
                />
                <span>Connect on WhatsApp</span>
              </Link>
            </div>

            <div className={styles.contactInfo}>
              <h3>Dr.Manuj Joshi</h3>
              <p>
                53, Kings Rd, near Metro Station Mansarovar, Nirman Nagar,
                Jaipur, Rajasthan 302019 <br />
                +91-8619360651, +91-8875555265
              </p>

              <h3>Clinic timing</h3>
              <p>
                Monday-Saturday : 05:00 pm – 09:00 pm
                <br />
                Sunday : Closed
              </p>
            </div>
          </aside>
          <aside className={styles.map}>
            <iframe
            title="Clinic location on google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.693283491048!2d75.74952457609359!3d26.881484261430725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5db9452fef3%3A0x2f0b2d2200029474!2sDr%20Manuj%20Joshi%20Physiotherapist%20In%20Nirman%20Nagar%20Jaipur!5e0!3m2!1sen!2sus!4v1762937106746!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </aside>
        </section>
      </section>
    </>
  );
}
