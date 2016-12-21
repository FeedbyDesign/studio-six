import React from 'react'
import Slider from 'react-slick'

import './css/Studio.css'
import equipmentJson from './JSON/equipment.js'

import Equipment from './Equipment.js'

const imgNumber = 12

const Studio = () => {
  // Prepare array of pictures
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

  const sliderSettings = {
    className: "slider",
    // centerPadding: -50,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      centerMode: true,
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
        <Slider {...sliderSettings}>
          {childrenPics}
        </Slider>
      </div>
      <div className="iconsContainer">
        <div className="uk-text-left">
          <h1 className="Studio__text--equipment">EQUIPMENT</h1>
        </div>
        <div className="uk-text-left uk-float-left">
          <Equipment category="Tube Preamp" equipmentList={equipmentJson["tubePreamp"]} />
          <Equipment category="Preamp FET" equipmentList={equipmentJson["preampFET"]} />
          <Equipment category="Compressor & Eq" equipmentList={equipmentJson["compressorEq"]} />
          <Equipment category="Effect" equipmentList={equipmentJson["effect"]} />
          <Equipment category="Mics" equipmentList={equipmentJson["mic"]} />
          <Equipment category="DI" equipmentList={equipmentJson["di"]} />
          <Equipment category="Other" equipmentList={equipmentJson["other"]} />
        </div>
        <div className="uk-text-right uk-float-right">
          <Equipment category="Basses" equipmentList={equipmentJson["bass"]} />
          <Equipment category="Guitars" equipmentList={equipmentJson["guitar"]} />
          <Equipment category="Keyboards" equipmentList={equipmentJson["keyboard"]} />
          <Equipment category="Drums" equipmentList={equipmentJson["drums"]} />
        </div>
      </div>
    </div>
  )
}

export default Studio