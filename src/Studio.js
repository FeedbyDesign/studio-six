import React, { Component } from 'react'
import Slider from 'react-slick'

import './css/slick.min.css'
import './css/slick-theme.min.css'
import './css/ajax-loader.gif'
import './css/fonts/slick.eot'
import './css/fonts/slick.ttf'
import './css/fonts/slick.svg'

import './css/Studio.css'
import equipmentJson from './JSON/equipment.js'

import Equipment from './Equipment.js'

const imgNumber = 29

const sliderSettings = {
  className: "slider",
  // centerPadding: -50,
    dots: false,
    arrows: false,
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

class Studio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      galleryUrls: [process.env.PUBLIC_URL + "/photos/0.jpg"]
    }
  }
  componentDidMount() {
    // Prepare array of pictures
    let galleryUrls = []
    galleryUrls.length = imgNumber
    for (let i = 0; i < galleryUrls.length; i++) {
      galleryUrls[i] = process.env.PUBLIC_URL + "/photos/" + i + ".jpg"
    }
    this.setState({galleryUrls: galleryUrls})
  }
  render() {
    return (
      <div id="Studio">
        <div id="Studio-sliderContainer">
          <Slider {...sliderSettings}>
            {this.state.galleryUrls.map((picUrl, i) => {
              return (
                <div key={i}>
                  <img src={picUrl} className="image" alt="The Studio" />
                </div>
              )
            })}
          </Slider>
        </div>
        <div>
          <h1 id="Studio__text--equipment">EQUIPMENT</h1>
          <div id="Studio-EquipmentList">
            <div>
              <Equipment category="Tube Preamp" equipmentList={equipmentJson["tubePreamp"]} />
              <Equipment category="Preamp FET" equipmentList={equipmentJson["preampFET"]} />
              <Equipment category="Compressor & Eq" equipmentList={equipmentJson["compressorEq"]} />
              <Equipment category="Effect" equipmentList={equipmentJson["effect"]} />
              <Equipment category="Mics" equipmentList={equipmentJson["mic"]} />
              <Equipment category="DI" equipmentList={equipmentJson["di"]} />
              <Equipment category="PLUGINS" equipmentList={equipmentJson["plugins"]} />
              <Equipment category="Other" equipmentList={equipmentJson["other"]} />
            </div>
            <div className="Studio-EquipmentList--2">
              <Equipment category="Basses" equipmentList={equipmentJson["bass"]} />
              <Equipment category="Guitars" equipmentList={equipmentJson["guitar"]} />
              <Equipment category="Keyboards" equipmentList={equipmentJson["keyboard"]} />
              <Equipment category="Drums" equipmentList={equipmentJson["drums"]} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Studio

///////Before flexbox transform
// <div id="Studio">
//   <div className="sliderContainer">
//     <Slider {...sliderSettings}>
//       {childrenPics}
//     </Slider>
//   </div>
//   <div>
//     <div className="uk-text-left">
//       <h1 className="Studio__text--equipment">EQUIPMENT</h1>
//     </div>
//     <div className="uk-text-left uk-float-left">
//       <Equipment category="Tube Preamp" equipmentList={equipmentJson["tubePreamp"]} />
//       <Equipment category="Preamp FET" equipmentList={equipmentJson["preampFET"]} />
//       <Equipment category="Compressor & Eq" equipmentList={equipmentJson["compressorEq"]} />
//       <Equipment category="Effect" equipmentList={equipmentJson["effect"]} />
//       <Equipment category="Mics" equipmentList={equipmentJson["mic"]} />
//       <Equipment category="DI" equipmentList={equipmentJson["di"]} />
//       <Equipment category="Other" equipmentList={equipmentJson["other"]} />
//     </div>
//     <div className="uk-text-right uk-float-right">
//       <Equipment category="Basses" equipmentList={equipmentJson["bass"]} />
//       <Equipment category="Guitars" equipmentList={equipmentJson["guitar"]} />
//       <Equipment category="Keyboards" equipmentList={equipmentJson["keyboard"]} />
//       <Equipment category="Drums" equipmentList={equipmentJson["drums"]} />
//     </div>
//   </div>
// </div>
