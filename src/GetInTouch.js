import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './css/GetInTouch.css'

const GetInTouch = (props) => {
  const gitClassName = (props.currentPage==='/team') ? "GetInTouch-hidden" : "GetInTouch"
  return (
      <Link to="/team" className="link">
        <div className={gitClassName}>GET IN TOUCH</div>
      </Link>
  )
}
// TODO:
// <ReactCSSTransitionGroup
//   transitionName="anim_GetInTouch"
//   transitionAppear={true}
//   transitionAppearTimeout={1000}
//   transitionEnter={false}
//   transitionLeave={false}
//   >
//   <Link to="/team" className="link">
//     <div className={gitClassName}>GET IN TOUCH</div>
//   </Link>
// </ReactCSSTransitionGroup>

export default GetInTouch
