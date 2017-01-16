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
      <Link to="/studio" className={(props.focus==='/studio') ? " focus":""}>THE STUDIO</Link>
      <Link to="/artists" className={(props.focus==='/artists') ? " focus":""}>THE ARTISTS</Link>
      <Link to="/team" className={(props.focus==='/team') ? " focus":""}>THE TEAM</Link>
    </nav>
  )
}

export default TopNav
