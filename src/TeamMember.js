import React, { Component } from 'react'
import './css/teammember.css'
import Pic from './img/photo-dragonfly.jpg'

class TeamMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false,
    }
  }
  handleHide() {
    this.setState({hovered: true})
  }
  handleShow() {
    this.setState({hovered: false})
  }
  render() {
    return (
      <div className="panel uk-overlay">
        <img
          className={this.state.hovered ? "memberPhoto hidden" : "memberPhoto"}
          src={Pic}
          alt={this.props.memberData.name}
          onMouseEnter={this.handleHide.bind(this)}
          ></img>
        <div
          className="panelContent"
          onMouseLeave={this.handleShow.bind(this)}
          >
          <h4 className="name">Arnaud Chamey</h4>
          <div className="skills">
            <div>Sound Engineer</div>
            <div>Production</div>
          </div>
          <div className="contact">
            <div>+32 123 456 789</div>
            <div>someemail@studiosix.eu</div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamMember
