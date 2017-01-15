import React from 'react'
import { Link } from 'react-router'
import logo from './img/logo_neg_200.png';
import './css/TopNav.css';

const TopNav = (props) => {

  return (
    <nav>
      <div id="TopNav-logo--display">
        <Link to="/">
          <img alt="Studio Six" src={logo} className={(props.focus==='/') ? "hidden":"TopNav-logo"}></img>
        </Link>
      </div>
      <Link to="/studio">
        <div className={(props.focus==='/studio') ? "menuItem focus":"menuItem"}>
          THE STUDIO
        </div>
      </Link>
      <Link to="/artists">
        <div className={(props.focus==='/artists') ? "menuItem focus":"menuItem"}>
          THE ARTISTS
        </div>
      </Link>
      <Link to="/team">
        <div className={(props.focus==='/team') ? "menuItem focus":"menuItem"}>
          THE TEAM
        </div>
      </Link>
    </nav>
  )
}

export default TopNav
