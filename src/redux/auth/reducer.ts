import { User, Action, State } from '../../interfaces';
import { TYPES } from './types';

const initialState: State<User> = {
  data: null,
  loading: false,
  error: ''
};

const reducer = (state = initialState, action: Action<User | string>) => {
  switch (action.type) {
    case TYPES.ON_SIGN_IN_ACTION:
      return { ...state, loading: true, error: '' };
    case TYPES.SIGN_IN_SUCCESS_ACTION:
      return  { ...state, loading: false, error: '', data: action.payload as User };
    case TYPES.SIGN_IN_FAILED_ACTION:
      return  { ...state, loading: false, error: action.payload as string, data: null };
    default:
      return state;
  }
};

export default reducer;
