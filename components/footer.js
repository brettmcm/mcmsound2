import { React, useState} from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import components
import Modal from '../pages/modal'

//import data
import tech from '../data/tech.json'




function Footer() {

  const [showModal, setShowModal] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <a href="#"
          onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
        >
          <svg className={styles.techIcon} viewBox="0 0 26 17.6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g strokeWidth="1" strokeLinecap="round">
              <path class="st0" d="M13.1,5.5c0.9,0,1.8,0.4,2.4,1c0.6,0.6,1,1.4,1,2.4s-0.4,1.8-1,2.4c-0.6,0.6-1.4,1-2.4,1c-0.9,0-1.8-0.4-2.4-1 c-0.6-0.6-1-1.4-1-2.4s0.4-1.8,1-2.4C11.3,5.9,12.1,5.5,13.1,5.5z"/>
              <path class="st0" d="M5.9,13l0.8,1.3l1.2-0.5L9,13.3c0.3,0.3,0.7,0.6,1,0.8c0.4,0.2,0.8,0.4,1.2,0.5l0.2,1.3l0.2,1.3h1.5h1.5 l0.2-1.3l0.2-1.3c0.4-0.1,0.8-0.3,1.2-0.5c0.4-0.2,0.7-0.5,1-0.8l1.2,0.5l1.2,0.5l0.8-1.3"/>
              <path class="st0" d="M20.3,4.7l-0.8-1.3l-1.2,0.5l-1.2,0.5c-0.3-0.3-0.7-0.6-1-0.8c-0.4-0.2-0.8-0.4-1.2-0.5l-0.2-1.3l-0.2-1.3 h-1.5h-1.5l-0.2,1.3l-0.2,1.3c-0.4,0.1-0.8,0.3-1.2,0.5C9.7,3.8,9.3,4.1,9,4.4L7.8,3.9L6.6,3.3L5.9,4.7"/>
              <path class="st0" d="M7.4,11.1c-0.3-0.7-0.4-1.5-0.4-2.3c0-0.8,0.1-1.6,0.4-2.3"/>
              <path class="st0" d="M18.6,6.5c0.3,0.7,0.4,1.5,0.4,2.3c0,0.8-0.1,1.6-0.4,2.3"/>
              <path class="st0" d="M5.4,11.9c-0.4-1-0.6-2-0.6-3.1c0-1,0.2-2.1,0.6-3.1"/>
              <path class="st0" d="M20.6,5.7c0.4,1,0.6,2,0.6,3.1s-0.2,2.1-0.6,3.1"/>
              <path class="st0" d="M3.3,12.8c-0.5-1.3-0.8-2.6-0.8-3.9c0-1.3,0.3-2.7,0.8-3.9"/>
              <path class="st0" d="M22.7,4.9c0.5,1.3,0.8,2.6,0.8,3.9c0,1.3-0.3,2.7-0.8,3.9"/>
              <path class="st0" d="M1.4,13.5C0.8,12,0.5,10.4,0.5,8.8s0.3-3.2,0.9-4.7"/>
              <path class="st0" d="M24.6,4.1c0.6,1.5,0.9,3.1,0.9,4.7s-0.3,3.2-0.9,4.7"/>
            </g>
        </svg>
        </a>

        <Image
          src="mcm-icon.svg"
          alt="McM Sound Logo"
          width={25}
          height={25}
          className={styles.footerIcon}
          />
      </div>
      {showModal &&
        <Modal onClose={() => setShowModal(false)} className={styles.techModal}>
            {tech.map(techs => (
              <div>
              <h2>{techs.category}</h2>
                <ul className={styles.techList}>
                  {techs.elements.map(element => (
                    <p key={element} dangerouslySetInnerHTML={{ __html: element }}></p>
                  ))}
                </ul>
              </div>
            ))}
        </Modal>
      }
    </footer>
  )
}


export default Footer