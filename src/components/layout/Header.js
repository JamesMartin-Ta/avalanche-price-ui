import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from 'assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#222b36'
  },
  logo: {
    height: '40px',
    width: '40px',
    paddingRight: '22px'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    marginRight: '20px'
  },
  selected: {
    borderBottom: '1px solid #688eff'
  },
  authMenu: {
    marginLeft: 'auto'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <Box>
            <NavLink to='/'>
              <img src={Logo} className={classes.logo} alt={"logo"} />
            </NavLink>
          </Box>
          <Box display='flex' flexGrow={1}>
            <Typography>
              <NavLink
                exact
                to='/'
                className={classes.navLink}
                activeClassName={classes.selected}
              >
                Home
              </NavLink>
              <NavLink
                exact
                to='/info'
                className={classes.navLink}
                activeClassName={classes.selected}
              >
                Infos
              </NavLink>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
