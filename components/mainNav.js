import React from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function MainNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <Image
          src="mcm-icon.svg"
          alt="McM Sound Logo"
          width={50}
          height={50}
          />
          <div className={styles.contact}>
            <a href="https://open.spotify.com/user/jdmcm">
              <Image
                src="radio.svg"
                alt="McM Radio Logo"
                width={225}
                height={225}
                className={styles.radioLogo}
              />
            </a>
            <a href="mailto:info@themcmsound.com">Email</a>
            <a href="tel:201-891-1460">Call</a>
          </div>
        </div>
      </nav>
  )
}

export default MainNav