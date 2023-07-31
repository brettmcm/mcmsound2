import {React, useState, useEffect, useRef} from "react";
import Image from "next/image";
import Link from 'next/link'
import styles from '../styles/Home.module.css'

// import components
import Modal from '../pages/modal'

// import data
import videos from '../data/videos.json'




function WorkGrid() {

  const videoRef = useRef(null)

  const [showModal, setShowModal] = useState(false);
  const [selectedVid, setSelectedVid] = useState(null);

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.grid}>
        {videos.map(video => (
          <Link href={`/${video.slug}`} className={styles.videoLink} key={video.slug}
            onClick={(e) => {
              e.preventDefault();
              useEffect(() => {
                setSelectedVid(video);
                setShowModal(true);
              }, [])
            }}
            >
            <Image
              src={`/covers/${video.cover}`}
              alt={video.name}
              fill
            />
          </Link>
        ))}
      </div>
      {showModal &&
        <Modal onClose={() => setShowModal(false)} title={selectedVid.name}>
            <video autoplay controls playsinline id="videoplayergo" ref={videoRef}>
                <source src={selectedVid.source} type="video/mp4" />
            </video>
        </Modal>
      }
    </div>
  )
}

export default WorkGrid