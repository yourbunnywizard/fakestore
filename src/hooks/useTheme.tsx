import {useContext} from 'react';
import {ThemeContext, ThemeContextType} from '@components/ThemeProvider';

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useColors must be defined.');
  }

  return {
    theme: context.theme,
    applyTheme: context.applyTheme,
  };
};

export default useTheme;
