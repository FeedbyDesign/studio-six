import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App.js'
import Intro from './Intro.js'
import Studio from './Studio.js'
import Artists from './Artists.js'
import Team from './Team.js'
import Error from './404.js'

export default (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={Intro} />
      <Route path="/studio" component={() => (<Studio myProp="value" />)} />
      <Route path="/artists" component={Artists} />
      <Route path="/team" component={Team} />
      <Route path="*" component={Error} />
    </Route>

  </div>
)
