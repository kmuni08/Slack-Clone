import { Action, User } from '../../interfaces';
import { TYPES } from './types';

export const onSignInAction = (): Action<any> => {
  return {
    type: TYPES.ON_SIGN_IN_ACTION,
    payload: null
  }
}

export const signInFailedAction = (message: string): Action<string> => {
  return {
    type: TYPES.SIGN_IN_FAILED_ACTION,
    payload: message
  }
}

export const signInSuccessAction = (user: User): Action<User> => {
  return {
    type: TYPES.SIGN_IN_SUCCESS_ACTION,
    payload: { ...user}
  }
}




