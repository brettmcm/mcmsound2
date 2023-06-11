import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

import { React, useState, useRef, useEffect } from 'react'
// import Ticker from 'react-ticker'

import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import videos from '../data/videos.json'



export default function Home() {

  const [ activeTab, changeTab ] = useState("aboutBio")

  const bioRef = useRef();
  const [bioHeight, setBioHeight] = useState(10);

  // useLayoutEffect(() => {
  //   setWidth(bioRef.current.offsetWidth);
  //   setHeight(ref.current.offsetHeight);
  // }, []);

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

        <div className={styles.grid}>
        {videos.map(video => (
          <Link href={`/${video.slug}`} className={styles.gridLink} key={video.slug}>
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
            <div onClick={() => {changeTab('aboutHardware')}} className={activeTab == 'aboutHardware' ? styles.active : styles.none}>Hardware</div>
            <div onClick={() => {changeTab('aboutSoftware')}} className={activeTab == 'aboutSoftware' ? styles.active : styles.none}>Software</div>
          </h2>
          <Abouts targetTab={activeTab} ref={bioRef} />

        </div>

      </main>
      <nav className={styles.nav}>
        McM Sound
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

        default:
            return <AboutBio />
    }

}


export function AboutBio() {
  return (
    <div className={styles.bio}>
      <p>JD is a renowned Sound Designer/Mixer for television and film, and a proverbial swiss army knife in the music world. After apprenticing at a number of sound studios under world class engineers in New York City, he worked for many years as a Sound Designer/Mixer at boutique television post production facility, Bionic. He then spent the bulk of his career thus far as a Senior Recording Engineer for Nutmeg Creative. There he become an accomplished ADR, animation and voice over recordist, while furthering his work as a Sound Designer/Mixer.</p>
      <p>In 2018 he founded McM Sound with the intention of making his skills available, at an industry competitive price, without all the red tape of a larger post production facility. You'll be in trusted hands from your first phone call, to delivery of your product…every time.</p>
      <p>His work blends the boundaries of music creation, sound design/editing and mixing, providing you with a wide variety of problem solving techniques. Whatever your audio needs are, he can deliver.</p>
      <p>When he's not in his studio, he enjoys spending time gardening, and being Daddy.</p>
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