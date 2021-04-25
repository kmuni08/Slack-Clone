import { ThunkAction } from 'redux-thunk';
import { Action, User } from '../../interfaces';

export const signInWithServiceAction = (): ThunkAction<void, any, null, Action<User | string>> => {
  return (dispatch) => {
    //TODO: some http call
    /* Ex:
    authService.login()
      .pipe(
        tap(() => dispatch(signInAction())),
        take(1)
      )
      .subscribe(
        res => dispatch(signInSuccessAction(res as User, authService.authType)),
        (error: Error) => dispatch(signInFailedAction(error?.message))
      )
     */
  }
}

