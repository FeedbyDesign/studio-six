import React from 'react'
import Masonry from 'react-masonry-component'

import './css/Artists.css'

import artistsJson from './artists/artists.js'

const masonryOptions = {
    // transitionDuration: 1
}

const Artists = () => {

  const childElements = artistsJson.map((artist, i) => {
    // let links

    if (!artist.name) {
      return null
    } else {
      // TODO: links = suite des divs qu'il faut
      return (
        <div key={i} className="artist">
          <div className="name">{artist.name}</div>
          <div className="name">{artist.album}</div>
          <div className="name">{artist.taskBy}</div>
          <img className="cover" src={process.env.PUBLIC_URL + '/covers/' + artist.cover} alt={artist.name} />
          <div className="uk-text-center" style={{color: "white"}}>
            <a href="#" class="uk-icon-hover uk-icon-home"></a>
            <a href="#" class="uk-icon-hover uk-icon-facebook"></a>
            <a href="#" class="uk-icon-hover uk-icon-youtube"></a>
          </div>
        </div>
      )
    }
  })

  return (
    <Masonry
        className={'uk-grid uk-grid-width-1-1 uk-grid-width-small-1-2 uk-grid-width-medium-1-4 uk-grid-width-large-1-5'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
    >
        {childElements}
    </Masonry>
  )
}

export default Artists
