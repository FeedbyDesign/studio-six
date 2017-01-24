import React from 'react'
import { Link } from 'react-router'

import './css/GetInTouch.css'

const GetInTouch = (props) => {
  const gitClassName = (props.currentPage==='/team') ? "GetInTouch-hidden" : "GetInTouch"
  return (
      <Link to="/team" className="link">
        <div className={gitClassName}>GET IN TOUCH</div>
      </Link>
  )
}

export default GetInTouch
