import { lightTheme, darkTheme } from '~/themes';

export type TThemeType =
  | typeof lightTheme.className
  | typeof darkTheme.className;
