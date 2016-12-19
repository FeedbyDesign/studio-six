import React from 'react'
import Slider from 'react-slick'

import './css/Studio.css'

const imgNumber = 12

const Studio = () => {

  let galleryUrls = []
  galleryUrls.length = imgNumber
  for (let i = 0; i < galleryUrls.length; i++) {
    galleryUrls[i] = process.env.PUBLIC_URL + "/photos/" + i + ".jpg"
  }
  const childrenPics = galleryUrls.map((picUrl, i) => {
    return (
      <div key={i}>
        <img src={picUrl} className="image" />
      </div>
    )
  })

  var settings = {
    className: "wrapper",
    // centerPadding: -50,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      // centerMode: true,
      adaptiveHeight: true,
      focusOnSelect: true,
      pauseOnHover: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        }
      ]
    }

  return (
    <div>
      <div className="sliderContainer">
        <Slider {...settings}>
          {childrenPics}
        </Slider>
      </div>
      <div>
        <div>Equipment</div>
        <div className="uk-grid ">

        </div>
        <div className="uk-grid ">

        </div>
      </div>
    </div>
  )
}

export default Studio
