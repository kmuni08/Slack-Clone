import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState } from '../interfaces';
import authReducer from './auth/reducer'

const rootReducer =  combineReducers<AppState>({
  auth: authReducer
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
