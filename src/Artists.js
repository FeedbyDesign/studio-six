import React from 'react'

import './css/Artists.css'
import artistsJson from './JSON/artists.js'

import Artist from './Artist.js'

let orderedArtists = artistsJson.sort((a, b) => b.importance - a.importance)

const Artists = () => {
  return (
    <div id="Artists" className="uk-grid uk-grid-width-1-1 uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4 uk-grid-width-xlarge-1-5">
      {
        orderedArtists.map((artist, i) => {
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
