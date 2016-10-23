import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './containers/App';
import Login from './components/Login';
import NewsFeed from './containers/NewsFeed';

import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={NewsFeed}></IndexRoute>
        <Route path='/login' component={Login}></Route>
        <Route path='/feed/(:filter)' component={NewsFeed}></Route>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
