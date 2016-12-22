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
  handleClick() {
    if (this.state.hovered) {
      this.setState({hovered: false})
    } else {
      this.setState({hovered: true})
    }
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
      <div className="Artist">
        <div className="uk-overlay">
          <img
            className={this.state.hovered ? "coverPhoto--hovered" : "coverPhoto"}
            src={process.env.PUBLIC_URL + '/covers/' + this.props.artistData.cover}
            alt={this.props.artistData.name}
            onMouseEnter={this.handleHide.bind(this)}
            onTouchStart={this.handleClick.bind(this)}
            ></img>
          <div
            className={this.state.hovered ? "Artist-panelContent uk-overlay-panel" : "hidden Artist-panelContent uk-overlay-panel"}
            onMouseLeave={this.handleShow.bind(this)}
            onTouchStart={this.handleClick.bind(this)}
            >
            <h4 className="Artist-name">{this.props.artistData.name}</h4>
            <div className="Artist-album">
              <div>{this.props.artistData.album}</div>
            </div>
            <div className="Artist-taskBy--box">
              <div className="Artist-taskBy">{this.props.artistData.taskBy}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Artist
