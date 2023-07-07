import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TTheme} from '@utils/colors';
import useThemeStyles from '@hooks/useThemeStyles';

interface IFloatingButton {
  onPress: () => void;
}
const FloatingButton = ({onPress}: IFloatingButton) => {
  const {styles: _styles} = useThemeStyles(createStyle);
  return (
    <TouchableOpacity style={_styles.buttonContainer} onPress={onPress}>
      <Text style={_styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

const createStyle = (theme: TTheme) =>
  StyleSheet.create({
    buttonContainer: {
      borderRadius: 50,
      borderWidth: 2,
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.border,
      width: 75,
      height: 75,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
    buttonText: {
      fontSize: 45,
      fontWeight: '600',
      lineHeight: 55,
      color: theme.text.info,
    },
  });

export default FloatingButton;
