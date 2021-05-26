import React from 'react';
import { HashRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Info from 'pages/Info';
import Header from 'components/layout/Header';

const Router = () => {
  return (
    <ReactRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/info'>
          <Info />
        </Route>
      </Switch>
    </ReactRouter>
  );
};

export default Router;
