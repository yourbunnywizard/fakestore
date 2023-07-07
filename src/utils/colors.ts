type SharedColors = {
  primary: string;
  secondary: string;
  light: string;
  dark: string;
  info: string;
  success: string;
  danger: string;
  warning: string;
};
export type ThemeColors = {
  background: string;
  border: string;
} & SharedColors;

export type ThemeTextColors = {
  placeholder: string;
} & SharedColors;

export type TTheme = {
  colors: ThemeColors;
  text: ThemeTextColors;
};

export type ColorPalettes = {
  light: TTheme;
  dark: TTheme;
};

const Colors: ColorPalettes = {
  light: {
    colors: {
      primary: '#3a7afe',
      secondary: '#f5f5f5',
      light: '#EEF4FF',
      dark: '#3062C8',
      info: '#246BFD',
      success: '#4ADE80',
      danger: '#F75555',
      background: '#ffffff',

      warning: '#ffc107',
      border: '#e6e6e6',
    },
    text: {
      primary: '#212121',
      secondary: '#6B6B6B',
      light: '#FFFFFF',
      info: '#246BFD',
      danger: '#F75555',
      placeholder: '#9E9E9E',

      dark: '#3062C8',
      success: '#28a745',
      warning: '#ffc107',
    },
  },
  dark: {
    colors: {
      primary: '#246BFD',
      secondary: '#35383F',
      light: '#192131',
      dark: '#3062C8',
      info: '#246BFD',
      success: '#4ADE80',
      danger: '#F75555',
      background: '#181A20',

      warning: '#ffc107',
      border: '#e6e6e6',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
      light: '#FFFFFF',
      info: '#246BFD',
      danger: '#F75555',
      placeholder: '#9E9E9E',

      dark: '#3062C8',
      success: '#28a745',
      warning: '#ffc107',
    },
  },
};
export default Colors;
