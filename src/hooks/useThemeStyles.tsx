import {StyleSheet} from 'react-native';
import {TTheme} from '@utils/colors';
import useTheme from '@hooks/useTheme';
import {useMemo} from 'react';

interface Styles<T extends StyleSheet.NamedStyles<T>> {
  theme: TTheme;
  applyTheme: (theme?: TTheme) => void;
  styles: T;
}

export default function useThemeStyles<T extends StyleSheet.NamedStyles<T>>(
  createStyle: (colors: TTheme) => T,
): Styles<T> {
  const {theme, applyTheme} = useTheme();

  return {
    theme: theme,
    applyTheme: applyTheme,
    styles: useMemo(() => createStyle(theme), [theme, createStyle]),
  };
}
