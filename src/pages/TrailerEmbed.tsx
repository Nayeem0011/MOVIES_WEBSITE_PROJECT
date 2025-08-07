import React from 'react'
import TrailerNotAvailable from '../page/TrailerNotAvailable'

type Video = {
  id: string
  key: string 
  name: string
  site: string
  type: string
}

interface TrailerEmbedProps {
  videos: Video[]
}

const TrailerEmbed: React.FC<TrailerEmbedProps> = ({ videos }) => {
  const trailer = videos.find(
    (v) => v.site === 'YouTube' && v.type === 'Trailer'
  )

  if (!trailer)
    return <p className="text-gray-400 mt-4"><TrailerNotAvailable/></p>

  // YouTube embed url
  const youtubeUrl = `https://www.youtube.com/embed/${trailer.key}`

  const downloadUrl = `https://www.youtube.com/watch?v=${trailer.key}`

  return (
    <div className="mt-6">
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={youtubeUrl}
          title={trailer.name}
          allowFullScreen
          className="flex justify-center items-center w-full h-[500px] "/>
      </div>

      <div className="text-center mt-8">
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-lg font-medium rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 animate-pulse">
            Download Trailer
      </a>
      </div>
    </div>
  )
}

export default TrailerEmbed
