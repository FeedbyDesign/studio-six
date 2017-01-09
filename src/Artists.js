import React from 'react'
import Masonry from 'react-masonry-component'

import './css/Artists.css'
import artistsJson from './JSON/artists.js'

import Artist from './Artist.js'

// const masonryOptions = {
//    // transitionDuration: 1
// }
// <Masonry
//   className={'uk-grid uk-grid-width-1-1 uk-grid-width-small-1-2 uk-grid-width-medium-1-4 uk-grid-width-large-1-5'}
//   options={masonryOptions}
//   disableImagesLoaded={false}
//   updateOnEachImageLoad={false}
// >

const Artists = () => {
  return (
    <div className="uk-grid uk-grid-width-1-1 uk-grid-width-small-1-2 uk-grid-width-medium-1-4 uk-grid-width-large-1-5">
      {
        artistsJson.map((artist, i) => {
          if (!artist.name) {
            return null
          } else {
            return <Artist key={i} artistData={artist} />
          }
        })
      }
    </div>
  )
}

export default Artists
