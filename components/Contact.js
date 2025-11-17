import Image from "next/image";
import styles from "../componentsStyles/contact.module.css";
import Link from "next/link";
import useMobile from './useMobile'

const styleObj={
                  width: "275px",
                  height: "300px",
                  borderRadius:'20%'
                }
const styleObj2={ maxWidth: "500px",marginTop:0 }

export default function ContactForm() {
  const {isMobile}=useMobile()
  return (
    <>
      <section className={styles.contact}>
        <h2>MEET THE DOCTOR</h2>
        <hr />
        <section className={styles.contactForms}>
          <aside>
            <div className={styles.doctorImage}>
              <Image
                src={"/images/manujjoshi.avif"}
                alt="Doctor image"
                loading="lazy"
                width={0}
                height={0}
                sizes="100%"
      
                style={isMobile ? {...styleObj,margin:'0 auto'} : styleObj}
              />

              <p style={isMobile ? styleObj2 :{...styleObj2,padding:'3rem'}}>
                <strong>Dr. Manuj Joshi (PT)</strong> is a skilled physiotherapist with over 5 years of clinical experience, offering advanced and patient-focused rehabilitation. 
                He holds multiple professional qualifications, including BPT, MPT, COMPT, CKTP, CDNT, CCT, and INCPT-AIIMS, reflecting his expertise in modern physiotherapy and manual therapy techniques. 
                Dr.Joshi is dedicated to treating pain, restoring mobility, and improving overall function through evidence-based methods. His approach combines detailed assessment, personalized treatment plans, and compassionate care to ensure effective and long-lasting recovery. 
                
              </p>
            </div>

            <div className={styles.contactInfo}>
              <h3>Location</h3>
              <p>
                <strong>Address: </strong>53, Kings Rd, near Metro Station
                Mansarovar, Nirman Nagar, Jaipur, Rajasthan 302019 <br />
                <strong>Mobile number: </strong>
                <Link
                  href="tel:+918619360651"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  +91-8619360651
                </Link>
                {" , "}
                <Link
                  href="tel:+918875555265"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  +91-8875555265
                </Link>
              </p>

              <h3>Clinic timing</h3>
              <p>
                <strong>Monday-Saturday</strong> : 05:00 pm – 09:00 pm
                <br />
                <strong>Sunday</strong> : Closed
              </p>
            </div>
          </aside>
          <aside>
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
