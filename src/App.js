import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'
import './css/App.css';

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
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ currentPage: nextProps.location.pathname })
    if (this.props.location.pathname !== nextProps.location.pathname) {
      // Scroll to top of page
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
  handleWheel(e) {
    if (window && window.innerHeight > 499 && this.state.currentPage === '/' && e.deltaY>-1) {
      browserHistory.push('/studio')
    }
    // if (window && window.innerHeight > 699) {
    //   if (e.deltaY>-1) {
    //     switch (this.state.currentPage) {
    //       case '/': browserHistory.push('/studio'); break;
    //       case '/studio': browserHistory.push('/artists'); break;
    //       case '/artists': browserHistory.push('/team'); break;
    //       default:
    //     }
    //   } else {
    //     switch (this.state.currentPage) {
    //       case '/team': browserHistory.push('/artists'); break;
    //       case '/artists': browserHistory.push('/studio'); break;
    //       case '/studio': browserHistory.push('/'); break;
    //       default:
    //     }
    //   }
    // }
  }

  render() {
    return (
      <div id="App" onWheel={this.handleWheel.bind(this)}>
        <TopNav id="App-TopNav" focus={this.state.currentPage}/>
        <div id="App-content">
          {this.props.children}
        </div>
        <GetInTouch />
      </div>
    );
  }
}

export default App;

// <div className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h2>Welcome to React</h2>
// </div>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>

// Before flexbox tranform

// <div className="App" onWheel={this.handleWheel.bind(this)}>
//   <div className="uk-container uk-container-center App-center uk-height-1-1">
//     <TopNav focus={this.state.currentPage}/>
//     <div className="container-vertical uk-vertical-align">
//       <div className="paddingForGIT content-vertical uk-vertical-align-middle">
//         {this.props.children}
//       </div>
//     </div>
//     <GetInTouch />
//   </div>
// </div>
