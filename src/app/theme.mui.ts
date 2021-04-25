import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#85CAFF',
      main: '#0C63E7',
      dark: '#0D41E1',
    },
    secondary: {
      light: '#A75CD6',
      main: '#7429A3',
      dark: '#521C73',
    },
    warning: {
      light: '#ffd900',
      main: '#ffb300',
      dark: '#ff8c00',
      contrastText: '#FFFFFF'
    },
    info: {
      light: '#FEFFD6',
      main: '#FFFFFF',
      dark: '#f5f3f4',
    },
    success: {
      light: '#a0e426',
      main: '#47b347',
      dark: '#118c11',
      contrastText: '#FFFFFF'
    },
    error: {
      light: '#e01e37',
      main: '#f94144',
      dark: '#a11d33',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  }
});
