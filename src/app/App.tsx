import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../redux/store.redux';

import './App.scss';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme.mui';

import Nav from '../components/nav/Nav';
import Container from '@material-ui/core/Container';
import Landing from '../components/landing/Landing';

const App: FunctionComponent<any> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Nav/>
          <Container style={{ padding: '15px 25px' }}>
            <Route path={'/'} exact component={Landing}/>
          </Container>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
