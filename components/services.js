import React from "react";
import styles from '../styles/Home.module.css'

//import data
import services from '../data/services.json'

function Services() {
  return (
    <div className={styles.services}>
      <h2>Services</h2>
      {services.map(service => (
        <div className={styles.serviceRow} key={service.category}>
          {service.category}
          <hr className={styles.rowHR} />
          <ul className={styles.servicesList}>
            {service.elements.map(element => (
              <p key={element}>{element}</p>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Services