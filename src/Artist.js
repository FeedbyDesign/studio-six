import React, { Component } from 'react'
import { Link } from 'react-router'
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
  toggleHide() {
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
    let websiteLink=null, facebookLink=null, youtubeLink=null
    if (this.props.artistData.website) {
      websiteLink = <span className="Artist-icon"><Link href={this.props.artistData.website} target="_blank" className="uk-icon-small uk-icon-external-link-square"></Link></span>
    }
    if (this.props.artistData.facebook) {
      facebookLink = <span className="Artist-icon"><Link href={this.props.artistData.facebook} target="_blank" className="uk-icon-small uk-icon-facebook-square"></Link></span>
    }
    if (this.props.artistData.youtube) {
      youtubeLink = <span className="Artist-icon"><Link href={this.props.artistData.youtube} target="_blank" className="uk-icon-small uk-icon-youtube-square"></Link></span>
    }
    return (
      <div className="Artist" >
        <div className="Artist-box">
          <img
            src={process.env.PUBLIC_URL + '/covers/' + this.props.artistData.cover}
            alt={this.props.artistData.name}
            ></img>
          <div className={this.state.hovered ? "Artist-panelContent" : "Artist-panelContent "}>
            <div className="Artist-content">

              <h4 className="Artist-name">{this.props.artistData.name}</h4>
              <div className="Artist-album">
                <div>{this.props.artistData.album}</div>
              </div>
              <div className="Artist-icons">
                {websiteLink}
                {facebookLink}
                {youtubeLink}
              </div>
              <div className="Artist-taskBy--box">
                <div className="Artist-taskBy">{this.props.artistData.taskBy}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Artist

// <div className="Artist" onMouseLeave={this.handleShow.bind(this)}>
//   <div className="uk-overlay">
//     <img
//       src={process.env.PUBLIC_URL + '/covers/' + this.props.artistData.cover}
//       alt={this.props.artistData.name}
//       onMouseEnter={this.handleHide.bind(this)}
//       onTouchStart={this.toggleHide.bind(this)}
//       ></img>
//     <div className={this.state.hovered ? "Artist-panelContent uk-overlay-panel" : "hidden Artist-panelContent uk-overlay-panel"}>
//       <h4 className="Artist-name">{this.props.artistData.name}</h4>
//       <div className="Artist-album">
//         <div>{this.props.artistData.album}</div>
//       </div>
//       <div className="Artist-icons">
//         {websiteLink}
//         {facebookLink}
//         {youtubeLink}
//       </div>
//       <div className="Artist-taskBy--box">
//         <div className="Artist-taskBy">{this.props.artistData.taskBy}</div>
//       </div>
//     </div>
//   </div>
// </div>
