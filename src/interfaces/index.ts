export * from './redux.model';
export * from './user.model';
export * from './parallax.model';

export type Theme = 'dark' | 'light';
export const ThemeDark = 'dark';
export const ThemeLight = 'light';

export type AnimationDirection = 'up' | 'down';
export const AnimateUp = 'up';
export const AnimateDown = 'down';

export type BackgroundColor = '#f5f5f5' | '#24395E' | '#4a154b';
export const White = '#f5f5f5';
export const Blue = '#24395E';
export const Purple = '#4a154b'


export type UnboxType<T> = T extends  Array<infer U> ? U : T;