import React from 'react'
import { Link } from 'react-router'
import './css/Intro.css'
import Logo from './img/logo_neg_600.png'

const Intro = () => {
  return (
    <div>
      <Link to="/studio">
        <img src={Logo} className="intro-logo"></img>
      </Link>
    </div>
  )
}

export default Intro

// Intro with Text
// <div className="tagline">
//   <div className="studio">STUDIO</div>
//   <div className="six">SIX</div>
//   <div className="block-small">
//     <div className="rehearse">REHEARSE MORE</div>
//     <div className="edit">EDIT LESS</div>
//   </div>
// </div>
