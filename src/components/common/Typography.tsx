import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {TTheme} from '@utils/colors';
import useThemeStyles from '@hooks/useThemeStyles';

type ITextType = 'headerTitle' | 'headerSubtitle' | 'error' | 'p';

interface IProps extends PropsWithChildren, TextProps {
  styles?: TextStyle;
  type?: ITextType;
}

const Typography = ({styles, type, children, ...props}: IProps) => {
  const {styles: _styles} = useThemeStyles(createStyle);

  const containerStyles = (function () {
    const textStyles = !type ? _styles.p : _styles[type];
    return StyleSheet.compose(
      StyleSheet.compose(_styles.typography, textStyles),
      styles,
    );
  })();

  return (
    <Text style={containerStyles} {...props}>
      {children}
    </Text>
  );
};

const createStyle = (theme: TTheme) =>
  StyleSheet.create({
    typography: {
      color: theme.text.primary,
      fontSize: 16,
      fontWeight: '400',
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    headerSubtitle: {},
    error: {
      fontSize: 14,
      fontStyle: 'italic',
      color: theme.text.danger,
    },
    p: {},
  });

export default Typography;
