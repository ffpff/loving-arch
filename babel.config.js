module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@utils': './src/utils',
          '@store': './src/store',
          '@assets': './src/assets',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};