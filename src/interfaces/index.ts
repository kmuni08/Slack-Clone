export * from './redux.model';
export * from './user.model';
export * from './prototype-data.model';

export type Theme = 'dark' | 'light';
export const ThemeDark = 'dark';
export const ThemeLight = 'light';

export type UnboxType<T> = T extends  Array<infer U> ? U : T;