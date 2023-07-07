module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@api': './src/api',
        },
      },
    ],
  ],
};
