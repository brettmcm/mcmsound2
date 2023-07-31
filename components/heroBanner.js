import React from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function HeroBanner() {
  return (
    <div className={styles.hero}>

      <Image
      src="mcm-icon-outline.svg"
      alt="McM Sound Logo"
      width={225}
      height={225}
      className={styles.logo}
      />

      <h1>
        <span className={styles.eyebrow}>JD McMillin</span>
        Sound <span className={styles.highlight}>designer mixer</span> & audio <span className={styles.highlight}>consultant</span>
      </h1>

    </div>
  )
}

export default HeroBanner