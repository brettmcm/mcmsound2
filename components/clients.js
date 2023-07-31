import React from "react"
import Image from 'next/image'
import styles from '../styles/Home.module.css'


// import data
import clients from '../data/clients.json'


function Clients() {
  return (
    <div className={styles.clients}>
      <h2>Clients</h2>
      <div className={styles.logos}>
        {clients.map(client => (
          <Image
            src={`/clients/${client.logo}`}
            alt={client.name}
            width={225}
            height={225}
            className={styles.clientLoog}
            key={client.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Clients