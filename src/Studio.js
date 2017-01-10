import React from 'react'
import Slider from 'react-slick'

import './css/Studio.css'
import equipmentJson from './JSON/equipment.js'

import Equipment from './Equipment.js'

// import photo0 from './img/studio/0.jpg'
// import photo1 from './img/studio/1.jpg'
// import photo2 from './img/studio/2.jpg'
// import photo3 from './img/studio/3.jpg'
// import photo4 from './img/studio/4.jpg'
// import photo5 from './img/studio/5.jpg'
// import photo6 from './img/studio/6.jpg'
// import photo7 from './img/studio/7.jpg'
// import photo8 from './img/studio/8.jpg'
// import photo9 from './img/studio/9.jpg'
// import photo10 from './img/studio/10.jpg'
// import photo11 from './img/studio/11.jpg'
// import photo12 from './img/studio/12.jpg'
// import photo13 from './img/studio/13.jpg'
// import photo14 from './img/studio/14.jpg'
// import photo15 from './img/studio/15.jpg'
// import photo16 from './img/studio/16.jpg'
// import photo17 from './img/studio/17.jpg'
// import photo18 from './img/studio/18.jpg'
// import photo19 from './img/studio/19.jpg'
// import photo20 from './img/studio/20.jpg'
// import photo21 from './img/studio/21.jpg'
// import photo22 from './img/studio/22.jpg'
// import photo23 from './img/studio/23.jpg'
// import photo24 from './img/studio/24.jpg'
// import photo25 from './img/studio/25.jpg'
// import photo26 from './img/studio/26.jpg'
// import photo27 from './img/studio/27.jpg'

const imgNumber = 28

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
  // let childrenPics = [
  //   <div key={0}><img src={photo0} className="image" /></div>,
  //   <div key={1}><img src={photo0} className="image" /></div>,
  //   <div key={2}><img src={photo0} className="image" /></div>,
  //   <div key={3}><img src={photo0} className="image" /></div>,
  //   <div key={4}><img src={photo0} className="image" /></div>,
  //   <div key={5}><img src={photo0} className="image" /></div>,
  //   <div key={6}><img src={photo0} className="image" /></div>,
  //   <div key={7}><img src={photo0} className="image" /></div>,
  // ]


  const sliderSettings = {
    className: "slider",
    // centerPadding: -50,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      centerMode: true,
      // adaptiveHeight: true,
      focusOnSelect: true,
      pauseOnHover: true,
      swipeToSlide: true,
      // lazyload: true,
      responsive: [
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        },
        {
          breakpoint: 960,
          settings: { slidesToShow: 2 }
        }
      ]
    }

  return (
    <div className="">
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
