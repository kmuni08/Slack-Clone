import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../redux/store.redux';

import './App.scss';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme.mui';

import { DIContext } from '../contexts/di.context';
import { container } from '../di-container/di.config';

import AppRoutes from './AppRoutes';

const App: FunctionComponent<any> = () => {

  return (
    <ThemeProvider theme={theme}>
      <DIContext.Provider value={container}>
        <Provider store={store}>
          <BrowserRouter>
            <AppRoutes/>
          </BrowserRouter>
        </Provider>
      </DIContext.Provider>
    </ThemeProvider>
  );
}

export default App;
