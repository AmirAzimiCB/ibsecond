import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Preview = (props) => {
  const {url, renderDefault} = props
  if (!url) {
    return <div>Missing video URL</div>
  }
  const isYouTube = url.includes('youtube.com')
  const isVimeo = url.includes('vimeo.com')
  let id = ''
  if (isYouTube) {
    id = getYouTubeId(url)
  } else if (isVimeo) {
    id = url.split('/').pop()
  }

  return (
    <div>
      {/* Renders the default preview UI */}
      {renderDefault({...props, title: 'Video Embed'})}
      {/* Renders the video preview below */}
      {isYouTube && <LiteYouTubeEmbed id={id} />}
      {isVimeo && (
        <iframe
          src={`https://player.vimeo.com/video/${id}`}
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          title="Vimeo video"
        ></iframe>
      )}
    </div>
  )
}

export default {
  name: 'video',
  type: 'object',
  title: 'Video Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Video URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: Preview,
  },
}
