import React, {createContext, PropsWithChildren, useState} from 'react';
import Colors, {TTheme} from '@utils/colors';
import {useColorScheme} from 'react-native';

export type ThemeContextType = {
  theme: TTheme;
  applyTheme: (theme?: TTheme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({children}: PropsWithChildren) => {
  const [theme, setTheme] = useState(Colors.light);
  const isDarkMode = useColorScheme() === 'dark';

  const applyTheme = (newTheme?: TTheme) => {
    setTheme(() => {
      if (newTheme) {
        return newTheme;
      }

      return isDarkMode ? Colors.dark : Colors.light;
    });
  };

  return (
    <ThemeContext.Provider value={{applyTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, ThemeContext};
