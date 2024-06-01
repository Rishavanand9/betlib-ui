// themes.ts
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  bgColor: 'white',
  textColor: 'black',
  primaryColor: 'blue',
  primaryColorDark: 'darkblue',
  colors: {
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    default: '#333',
  },
};

export const darkTheme: DefaultTheme = {
  bgColor: 'black',
  textColor: 'white',
  primaryColor: 'darkblue',
  primaryColorDark: 'navy',
  colors: {
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    default: '#333',
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
