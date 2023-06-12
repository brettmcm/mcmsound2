import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

import { React, useState, useRef, useEffect } from 'react'

import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import videos from '../data/videos.json'
import bio from '../data/bio.json'



export default function Home() {

  const [ activeTab, changeTab ] = useState("aboutBio")

  const bioRef = useRef();

  return (
    <>
    <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>McM Sound</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111214" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}
      onContextMenu={(e) => {
        e.preventDefault(); // prevent the default behaviour when right clicked
        console.log("Right Click");
      }}>

        <div className={styles.hero}>

          <Image
          src="/portrait.jpg"
          alt="Portrait of JD"
          width={225}
          height={225}
          className={styles.portrait}
          />

          <Image
          src="headline.svg"
          alt="JD McMillin is McM Sound"
          width={225}
          height={225}
          className={styles.logo}
          />

        </div>

        <div className={styles.carousel}>
        {videos.map(video => (
          <Link href={`/${video.slug}`} className={styles.carouselLink} key={video.slug}>
            <Image
              src={`/covers/${video.cover}`}
              alt={video.name}
              fill
            />
          </Link>
        ))}
        </div>


        <div className={styles.about}>
          <h2>
            <div onClick={() => {changeTab('aboutBio')}} className={activeTab == 'aboutBio' ? styles.active : styles.none}>About</div>
            <div onClick={() => {changeTab('aboutClients')}} className={activeTab == 'aboutClients' ? styles.active : styles.none}>Clients</div>
            <div onClick={() => {changeTab('aboutHardware')}} className={activeTab == 'aboutHardware' ? styles.active : styles.none}>Hardware</div>
            <div onClick={() => {changeTab('aboutSoftware')}} className={activeTab == 'aboutSoftware' ? styles.active : styles.none}>Software</div>
          </h2>
          <Abouts targetTab={activeTab} ref={bioRef} />

        </div>

        <footer className={styles.footer}>
          <div className={styles.social}>
            <a href="https://open.spotify.com/user/jdmcm">Spotify</a>
            <a href="http://soundcloud.com/themcmsound">SoundCloud</a>
            <a href="http://mixcloud.com/themcmsound">MixCloud</a>
          </div>
          <div className={styles.contact}>
            <a href="mailto:info@themcmsound.com">Email</a>
            201-891-1460
          </div>
        </footer>

      </main>
      <nav className={styles.nav}>
        <Image
          src="mcm-icon.svg"
          alt="McM Sound Logo"
          width={50}
          height={50}
          />
        <div className={styles.menu}>
          <a href="mailto:info@themcmsound.com">Contact</a>
        </div>
      </nav>
    </>
  )
}


export function Abouts({targetTab}) {

  switch (targetTab) {
        case 'aboutHardware':
            return <AboutHardware />

        case 'aboutSoftware':
            return <AboutSoftware />

        case 'aboutClients':
            return <Clients />

        default:
            return <AboutBio />
    }

}


export function AboutBio() {
  return (
    <div className={styles.bio}>
      {bio.map(p => (
        <p>{p.p}</p>
      ))}
    </div>
  )
}

export function AboutHardware() {
  return (
    <ul className={styles.gearListColumn}>
      <li>Mac Pro</li>
      <li className={styles.sub}>3.3 GHz 12-Core Intel Xeon W</li>
      <li className={styles.sub}>AMD Radeon Pro 580X</li>
      <li className={styles.sub}>144 GB RAM</li>
      <li className={styles.sub}>OWC Accelsior 4M2 NVMe SSD RAIDs</li>
      <li className={styles.sub}>BlackMagic DeckLink</li>
      <li>Apogee Symphony I/O</li>
      <li>5.1 Surround Sound Monitoring System</li>
      <li>TC Electronic Clarity M 5.1 Loudness Metering System</li>
      <li>AVID S3 Control Surface</li>
      <li>Phone Patch</li>
    </ul>
  )
}

export function AboutSoftware() {
  return (
    <ul className={styles.gearListColumn}>
      <li>Pro Tools Ultimate 2020</li>
      <li>Soundminer v5</li>
      <li>iZotope RX v8</li>
      <li>Melodyne</li>
      <li>Source-Connect</li>
      <li>Adobe Creative Suite</li>
      <li>Native Instruments Komplete Ultimate</li>
      <li>World Class Plug-in Collection</li>
    </ul>
  )
}



export function Clients() {
  return (
    <ul className={styles.gearListColumn}>
      <li>HBO</li>
      <li>Epix</li>
      <li>Nickelodeon</li>
      <li>VH1</li>
      <li>AMC</li>
      <li>ESPN</li>
      <li>SYFY</li>
      <li>BBC America</li>
    </ul>
  )
}