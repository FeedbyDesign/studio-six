import React from 'react'
import { Link } from 'react-router'
import logo from './img/logo_200px.png';
import './css/TopNav.css';

const TopNav = (props) => {

  return (
    <div className="TopNav uk-position-top">
      <Link to="/" className="TopNav-logo-wrapper">
        <img alt="Studio Six" src={logo} className={(props.focus==='/') ? "hidden":"TopNav-logo"}></img>
      </Link>
      <Link to="/studio" className="TopNav__">
        <div className={(props.focus==='/studio' || props.focus==='/') ? "menuItem focus":"menuItem"}>
          THE STUDIO
        </div>
      </Link>
      <Link to="/artists">
        <div className={(props.focus==='/artists' || props.focus==='/') ? "menuItem focus":"menuItem"}>
          THE ARTISTS
        </div>
      </Link>
      <Link to="/team">
        <div className={(props.focus==='/team' || props.focus==='/') ? "menuItem focus":"menuItem"}>
          THE TEAM
        </div>
      </Link>
    </div>
  )
}

export default TopNav