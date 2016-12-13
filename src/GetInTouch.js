import React from 'react'
import { Link } from 'react-router'
import './css/GetInTouch.css'

const GetInTouch = () => {
  return (
    <div className="uk-position-bottom GetInTouch">

      <Link to="/team" className="link">GET IN TOUCH</Link>
    </div>
  )
}

export default GetInTouch
