import React from 'react'
import { Link } from 'react-router'
import './css/GetInTouch.css'

const GetInTouch = () => {
  return (
    <Link to="/team" className="link">
      <div className="GetInTouch">
        GET IN TOUCH
      </div>
    </Link>
  )
}

export default GetInTouch
