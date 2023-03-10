import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

import React from 'react'
import Ticker from 'react-ticker'

import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import videos from '../data/videos.json'

export default function Home() {
  return (
    <>
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

        <div className={styles.marqueeMask}>
          <video
          preload="auto"
          playsInline
          autoPlay
          muted
          loop
          className={styles.marqueeVideo}
          
        >
            <source src="mcm-videobg-01.mp4" type="video/mp4" />
          </video>
          <Image
          src="mcm-icon.svg"
          alt="McM Sound Logo Icon"
          width={225}
          height={225}
          className={styles.logo}
          />
        </div>

        <div className={styles.tickerWrap}>
          <Ticker speed={10} className={styles.tickerContainer}>
            {() => (
              <h1 className={styles.tickerText}>WE MAKE THINGS SOUND AWESOME&nbsp;☠︎&nbsp;</h1>
            )}
          </Ticker>
          <div className={styles.tickerBlurL}></div>
          <div className={styles.tickerBlurR}></div>
        </div>

        <div className={styles.grid}>
        {videos.map(video => (
          <Link href={`/${video.slug}`} className={styles.gridLink}>
          <Image
            src={`/covers/${video.cover}`}
            alt={video.name}
            fill
          />
          </Link>
        ))}
        </div>

      </main>
    </>
  )
}