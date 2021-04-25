import { User } from './user.model';

export interface Action<T> {
  type: string;
  payload: T | null;
}

export interface State<T> {
  data: T | null,
  loading?: boolean;
  error?: string
}

export interface AppState {
  auth: State<User>
}
