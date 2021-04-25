import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store.redux';

import './App.scss';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme.mui';

const App: FunctionComponent<any> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div>App</div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
