import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Movies from 'Routes/Home/Movies';
import TVs from 'Routes/TV/TVs';
import Search from 'Routes/Search/Search';
import Detail from 'Routes/Detail/Detail';

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/movies" exact component={Movies} />
        <Route path="/shows" exact component={TVs} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/movies" />
      </Switch>
    </>
  </Router>
);
