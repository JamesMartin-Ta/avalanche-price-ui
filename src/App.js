import React from 'react';
import Router from './Router';
import Theme from 'styles/theme';
import { withStyles } from '@material-ui/core/styles';

const App = () => {

  return (
    <Theme>
      <Router />
    </Theme>
  );
};

export default withStyles({ withTheme: true })(App);
