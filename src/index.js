import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import startPage from './components/start/StartPage'
import Home from './components/home/Home'


import { Router, Route, IndexRoute, browserHistory } from 'react-router'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
        <Route path='/startPage' component={startPage} />
    </Route>
  </Router>,
  root
)
