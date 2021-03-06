import React, { Component } from 'react';
// import { browserHistory } from 'react-router'

import './css/App.css';
import artistsJson from './JSON/artists.js'

import TopNav from './TopNav.js'
import GetInTouch from './GetInTouch.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: null,
    }
  }
  componentDidMount() {
    this.setState({ currentPage: this.props.location.pathname })
    // Preload studio pictures
    let tempVar
    for (let i = 0; i < 5; i++) {
      tempVar = process.env.PUBLIC_URL + "/photos/" + i + ".jpg"
    }
    // Prelaod Artists pictures
    for (let i = 0; i < artistsJson.length; i++) {
      tempVar = process.env.PUBLIC_URL + "/covers/" + artistsJson[i]
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ currentPage: nextProps.location.pathname })
    if (this.props.location.pathname !== nextProps.location.pathname) {
      // Scroll to top of page
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
  // handleWheel(e) {
  //   if (window && window.innerHeight > 499 && this.state.currentPage === '/' && e.deltaY>-1) {
  //     browserHistory.push('/studio')
  //   }
  //   // if (window && window.innerHeight > 699) {
  //   //   if (e.deltaY>-1) {
  //   //     switch (this.state.currentPage) {
  //   //       case '/': browserHistory.push('/studio'); break;
  //   //       case '/studio': browserHistory.push('/artists'); break;
  //   //       case '/artists': browserHistory.push('/team'); break;
  //   //       default:
  //   //     }
  //   //   } else {
  //   //     switch (this.state.currentPage) {
  //   //       case '/team': browserHistory.push('/artists'); break;
  //   //       case '/artists': browserHistory.push('/studio'); break;
  //   //       case '/studio': browserHistory.push('/'); break;
  //   //       default:
  //   //     }
  //   //   }
  //   // }
  // }

  render() {
    return (
      <div id="App">
        <TopNav id="App-TopNav" currentPage={this.state.currentPage}/>
        {this.props.children}
        <GetInTouch currentPage={this.state.currentPage}/>
      </div>
    );
  }
}

export default App;
