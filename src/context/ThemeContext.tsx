import React, { createContext, useContext, ReactNode, useState } from 'react';
import { ThemeProvider as SCThemeProvider, DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  bgColor: 'white',
  textColor: 'black',
  primaryColor: 'blue',
  primaryColorDark: 'darkblue',
};

export const darkTheme: DefaultTheme = {
  bgColor: 'black',
  textColor: 'white',
  primaryColor: 'darkblue',
  primaryColorDark: 'navy',
};

type ThemeContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};
