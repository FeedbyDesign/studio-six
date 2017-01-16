import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './css/GetInTouch.css'

const GetInTouch = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
      >

      <Link to="/team" className="link">
        <div className="GetInTouch">
          GET IN TOUCH
        </div>
      </Link>
    </ReactCSSTransitionGroup>
  )
}

export default GetInTouch
