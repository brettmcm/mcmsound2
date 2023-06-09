import videos from '../data/videos.json'

export async function getStaticPaths() {
  const paths = videos.map(video => ({
    params: { video: video.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const video = videos.find(video => video.slug === params.video)
  return { props: { video } }
}

export default function Video({ video }) {
  return <div>
    <h1>{video.name}</h1>
    <video controls="controls">
            <source src={video.source} type="video/mp4" />
        </video>
  </div>
}