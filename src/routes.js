import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App.js'
import Intro from './Intro.js'
import Studio from './Studio.js'
import Artists from './Artists.js'
import Team from './Team.js'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Intro} />
    <Route path="/studio" component={Studio} />
    <Route path="/artists" component={Artists} />
    <Route path="/team" component={Team} />
  </Route>
)
