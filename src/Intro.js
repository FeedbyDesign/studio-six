import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './css/Intro.css'
import Logo from './img/logo_neg_600.png'

const Intro = () => {
  return (
    <div id="Intro">
      <Link to="/studio">
        <ReactCSSTransitionGroup
          transitionName="anim_intro-logo"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false}
          >
          <img src={Logo} id="intro-logo" key="anim_intro-logo"></img>
        </ReactCSSTransitionGroup>
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
