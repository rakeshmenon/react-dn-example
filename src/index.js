import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import LoginPage from './components/Login';
import NewsFeed from './containers/NewsFeed';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LoginPage}></IndexRoute>
      <Route path='/feed' component={NewsFeed}></Route>
    </Route>
  </Router>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
