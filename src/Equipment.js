import React, { Component } from 'react'

import './css/Equipment.css'

class Equipment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  handleClick() {
    if (this.state.open) {
      this.setState({open: false})
    } else {
      this.setState({open: true})
    }
  }

  render() {
    const list = this.props.equipmentList.map((elem, i) => {
      return (
        <div key={i} className="Equipment__drawer-element">{elem}</div>
      )
    })
    return (
      <div>
        <h2 className="Equipment__text--catname" onClick={this.handleClick.bind(this)}>{this.props.category}</h2>
        <div className={this.state.open ? "Equipment__drawer" : "Equipment__drawer hidden"}>
          {list}
        </div>
      </div>

    )
  }
}

export default Equipment


// <div className="iconWrapper" onMouseLeave={this.handleShow.bind(this)}>
//   <div>
//     <a className="uk-icon-large uk-icon-hover uk-icon-github" onMouseEnter={this.handleHide.bind(this)}></a>
//     <div className="iconText">{this.props.category}</div>
//   </div>
//   <div className={this.state.hovered ? "dropdown" : "dropdown hidden"}>
//     <div className="dropdownWindow">
//       {this.state.equipmentList}
//     </div>
//   </div>
// </div>
