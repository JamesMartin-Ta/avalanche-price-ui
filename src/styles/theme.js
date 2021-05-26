import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";


const Theme = (props) => {
  const breakpoints = createBreakpoints({});

  const theme = createMuiTheme({
    palette: createPalette({
      primary: {
        main: '#688eff',
      },
      secondary: {
        main: '#222b36',
      },
      text: {
        main: '#ffffff'
      }
    }),
    typography: {
      fontFamily: 'Montserrat',
      color: '#ffffff',
      body1: {
        fontSize: 16,
        fontWeight: 400,
        color: '#ffffff',
        [breakpoints.down("sm")]: {
          fontSize: 14
        }
      },
      h1: {
        fontSize: 30,
        fontWeight: 600,
        color: '#ffffff',
        [breakpoints.down("sm")]: {
          fontSize: 18
        }
      },
      h2: {
        fontSize: 25,
        fontWeight: 600,
        color: '#919eab',
        [breakpoints.down("sm")]: {
          fontSize: 25
        }
      },
      h3: {
        fontSize: 20,
        fontWeight: 500,
        color: '#919eab',
        [breakpoints.down("sm")]: {
          fontSize: 20
        }
      },
      h4: {
        fontSize: 16,
        fontWeight: 500,
        color: '#ffffff',
      },
      // h3 bold
      body2: {
        fontSize: 20,
        fontWeight: 500
      }
    },
  });


  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};
export default Theme;
