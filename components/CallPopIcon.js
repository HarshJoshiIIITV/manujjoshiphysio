import Link from 'next/link'
import styles from '../componentsStyles/callPopIcon.module.css'
import Image from 'next/image'
export default function CallPopIcon(){
    return(
        <aside className={styles.popIcon}>
             <Link
                href="https://wa.me/918619360651"
                target="_blank"
                rel="noreferrer"
                className="btn"
              ><Image
                  src={"/images/phone.svg"}
                  alt={"Call"}
                  width={40}
                  height={40}
                  loading="lazy"
                /></Link>
             
            
        </aside>
    )
}