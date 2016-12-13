import React from 'react'
import { Link } from 'react-router'
import logo from './img/logo.svg';
import './css/TopNav.css';

const TopNav = (props) => {

  return (
    <div className="TopNav uk-position-top">
      <Link to="/">
        <img src={logo} className={(props.focus==='/') ? "menuItem focus":"menuItem"}></img>
      </Link>
      <Link to="/studio">
        <div className={(props.focus==='/studio') ? "menuItem focus":"menuItem"}>
          The Studio
        </div>
      </Link>
      <Link to="/artists">
        <div className={(props.focus==='/artists') ? "menuItem focus":"menuItem"}>
          The Artists
        </div>
      </Link>
      <Link to="/team">
        <div className={(props.focus==='/team') ? "menuItem focus":"menuItem"}>
          The Team
        </div>
      </Link>
    </div>
  )
}

export default TopNav
