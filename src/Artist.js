import React, { Component } from 'react'
import './css/Artist.css'

class Artist extends Component {
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
  // "name": "Saule",
  // "album": "Vous êtes ici",
  // "cover": "CD saule.jpg",
  // "website": "http://www.saule.be",
  // "facebook": "",
  // "youtube": "",
  // "taskBy": "Recorded by A.L.",
  render() {
    return (
      <div className="uk-overlay">
        <img
          className={this.state.hovered ? "coverPhoto--hovered" : "coverPhoto"}
          src={process.env.PUBLIC_URL + '/covers/' + this.props.artistData.cover}
          alt={this.props.artistData.name}
          onMouseEnter={this.handleHide.bind(this)}
          ></img>
        <div
          className={this.state.hovered ? "Artist-panelContent uk-overlay-panel" : "hidden Artist-panelContent uk-overlay-panel"}
          onMouseLeave={this.handleShow.bind(this)}
          >
          <h4 className="">{this.props.artistData.name}</h4>
          <div className="">
            <div>{this.props.artistData.album}</div>
          </div>
          <div className="">
            <div>{this.props.artistData.taskBy}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Artist
