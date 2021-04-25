// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ButtonPropsColorOverrides } from '@material-ui/core/Button/Button';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppBarPropsColorOverrides } from '@material-ui/core/AppBar/AppBar';

declare module '@material-ui/core/Button/Button' {
  interface ButtonPropsColorOverrides {
    error: true;
    info: true;
    success: true;
    warning: true;
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

