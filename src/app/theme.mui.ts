import { createTheme } from '@material-ui/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ButtonPropsColorOverrides, ButtonPropsSizeOverrides } from '@material-ui/core/Button/Button';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppBarPropsColorOverrides } from '@material-ui/core/AppBar/AppBar';

declare module '@material-ui/core/Button/Button' {
  interface ButtonPropsColorOverrides {
    error: true;
    info: true;
    success: true;
    warning: true;
  }
  interface ButtonPropsSizeOverrides {
    'x-large': true
  }
}

declare module '@material-ui/core/AppBar/AppBar' {
  interface AppBarPropsColorOverrides {
    error: true;
    info: true;
    success: true;
    warning: true;
  }
}


export default createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: 'x-large' },
          style: {
            padding: '15px 40px'
          }
        }
      ]
    }
  },
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
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});
